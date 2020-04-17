import React from "react";
import AbstractDataContext from "./AbstractDataContext";
import {AsyncStorage} from "react-native";

let wantedBooks = null;
let myBooks = null;
const gateway = "https://gb-gateway.herokuapp.com";

const booksReducer = (state, action) => {
    switch (action.type) {
        case 'get_my_books':
            console.info("BooksContext reducer: returning my lib");
            return {...state, my: action.payload};
        case 'delete_my_book':
            myBooks = state.my.filter((element) => element._id !== action.payload);
            return {...state, my: myBooks};
        case 'add_to_library':
            myBooks = state.my.concat(
                {
                    _id: action.payload._id,
                    writer: action.payload.writer,
                    title: action.payload.title,
                });
            return {
                ...state, my: myBooks
            };
        case 'get_wanted_books':
            return {...state, wanted: action.payload};
        case 'delete_wanted_book':
            wantedBooks = state.wanted.filter((element) => element._id !== action.payload);
            return {...state, wanted: wantedBooks};
        case 'add_to_wanted':
            wantedBooks = state.wanted.concat(
                {
                    _id: action.payload._id,
                    writer: action.payload.writer,
                    title: action.payload.title,
                    price: action.payload.price,
                });
            return {
                ...state, wanted: wantedBooks
            };
        case 'calculate_offers':
            return {...state, calculated: action.payload.calculated};
        case 'edit_price':
            state.wanted.forEach((element) => {
                console.log(element._id)
                console.log(action.payload.id)
                if(element._id === action.payload.id) {
                    element.price  = action.payload.price;
                }
            });
            console.log(state.wanted)
            return {...state};
        default:
            return [];
    }
};

async function fetchShelves() {
    const response = await fetch(`${gateway}/books`, {
        method: 'GET',
        headers: {
            "content-type": 'application/json',
            "authorization": `Bearer ${await AsyncStorage.getItem('token')}`
        },
    });
    if (!response.ok) {
        console.log("Error response while fetching books");
        return;
    }
    const responseObject = await response.json();
    console.log("Received response with fetched shelves");
    myBooks = responseObject.library;
    wantedBooks = responseObject.wanted;
}

async function persistBooks(shelfType) {
    const body = shelfType === "library" ? {library: myBooks} : shelfType === "wanted" ? {wanted: wantedBooks} : null;
    if (body == null) return;
    const response = fetch(`${gateway}/books`, {
            method: 'POST',
            headers: {
                "content-type": 'application/json',
                "authorization": `Bearer ${await AsyncStorage.getItem('token')}`
            },
            body: JSON.stringify(body),
        }
    );
    if ((await response).status !== 200) {
        console.log(`Problem with saving ${shelfType} books: ${(await response).statusText}`);
    } else {
        console.log("Books were successfully sent to database")
    }
}

const fetchMyBooks = dispatch => async () => {
    if (!myBooks) await fetchShelves();
    dispatch({type: 'get_my_books', payload: myBooks})
};
const deleteMyBook = dispatch => async (id) => {
    await dispatch({type: 'delete_my_book', payload: id});
    persistBooks("library");
};
const addBookToLibrary = dispatch => async (title, writer) => {
    const _id = (Math.max.apply(null, myBooks.map(e => e._id)) + 1).toString();
    await dispatch({type: 'add_to_library', payload: {_id, title, writer}});
    persistBooks("library");
};

const fetchWantedBooks = dispatch => async () => {
    if (!wantedBooks) await fetchShelves();
    dispatch({type: 'get_wanted_books', payload: wantedBooks})
};
const deleteWantedBook = dispatch => async (id) => {
    await dispatch({type: 'delete_wanted_book', payload: id});
    persistBooks("wanted");
};
const addBookToWanted = dispatch => async (title, writer, price) => {
    const _id = (Math.max.apply(null, wantedBooks.map(e => e._id)) + 1).toString();
    dispatch({type: 'add_to_wanted', payload: {_id, title, writer, price}});
    persistBooks("wanted");
};

const editWantedBookPrice = dispatch => async (id, price) => {
    console.log("editwantedbookPrice: ", id)
    dispatch({type: 'edit_price', payload: {id, price}});
    persistBooks("wanted");
}

const calculateOffers = dispatch => async () => {
    fetch(`${gateway}/calculate`, {
            method: 'POST',
            headers: {
                "content-type": 'application/json',
                "authorization": `Bearer ${await AsyncStorage.getItem('token')}`
            },
            body: JSON.stringify({wanted: wantedBooks}),
        }
    ).then(response => {
            if (response.status === 400) {
                return console.log(`Problem with fetching calculated offers: ${response}`);
            }
            return response.json();
        }
    ).then(json => json).then((data) =>{
        console.log(`${data.length} books were successfully received from the service.`);
        dispatch({type: 'calculate_offers', payload: {calculated: data}})
        }
    );
}

export const {Provider, Context} = AbstractDataContext(
    booksReducer,
    {
        AbstractDataContext,
        fetchMyBooks, deleteMyBook,
        fetchWantedBooks, deleteWantedBook,
        addBookToLibrary, addBookToWanted,
        calculateOffers,
        editWantedBookPrice
    },
    []
);

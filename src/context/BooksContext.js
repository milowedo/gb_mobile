import React from "react";
import AbstractDataContext from "./AbstractDataContext";
import {AsyncStorage} from "react-native";

let wantedBooks = [
    {_id: "0", writer: "Kurt Vonnegut", title: "Breakfast of Champions", price: 37},
    {_id: "1", writer: "Truman Capote", title: "Z zimną krwią", price: 55},
    {_id: "2", writer: "Philip Kindred Dick", title: "Valis", price: 12},
    {_id: "3", writer: "J. Sartre", title: "Słowa", price: 1},
    {_id: "4", writer: "Janusz Zajdel", title: "Prawo do powrotu", price: 99},
    {_id: "5", writer: "Pratchett", title: "Kolor magii", price: 6},
    {_id: "6", writer: "Tolkien", title: "Silmarilion", price: 9},
    {_id: "7", writer: "Michał Bułhakov", title: "Mistrz i Małgorzata", price: 3},
    {_id: "8", writer: "Ernest Hemingway", title: "Słońce też wschodzi", price: 39},
    {_id: "9", writer: "Nietzsche", title: "Ecce homo", price: 44},
    {_id: "10", writer: "Andrzej Sapkowski", title: "Krew Elfów", price: 1},

    {
        _id: "11",
        writer: "Alexandra Elizabeth Sheedy",
        title: "She Was Nice To Mice: The Other Side of Elizabeth I's Character Never Before Revealed by Previous Historians",
        price: 32
    },
];
let myBooks = [
    {_id: "0", writer: "Kurt Vonnegut", title: "Slaughterhouse no 5"},
    {
        _id: "1",
        writer: "Philip Gourevitch",
        title: "We Wish to Inform You That Tomorrow We Will Be Killed with Our Families"
    },
    {_id: "2", writer: "Philip Kindred Dick", title: "Do Androids Dream of Electric Sheep?"},
    {_id: "3", writer: "Jerome K. Jerome", title: "Trzech panów w łódce (nie licząc psa)"},
    {_id: "4", writer: "James Jones", title: "The Thin Red Line"},
    {_id: "5", writer: "William Golding", title: "Widzialna ciemność"},
    {_id: "6", writer: "Luke Dittrich", title: "Eksperyment"},
    {_id: "7", writer: "Franz Kafka", title: "Proces"},
    {_id: "8", writer: "Niccolò Machiavelli", title: "Książe"},
    {_id: "9", writer: "James Clavell", title: "Król szczurów"},
    {_id: "10", writer: "Norman Davies", title: "Boże igrzysko"},
    {_id: "11", writer: "Jaume Cabré", title: "Głosy panamo"},
    {_id: "12", writer: "Jaume Cabré", title: "Wyznaję"},
];
const gateway = "https://gb-gateway.herokuapp.com";

const booksReducer = (state, action) => {
    switch (action.type) {
        case 'get_my_books':
            console.info("BooksContext reducer: returning my lib");
            return {...state, my: action.payload};
        case 'delete_my_book':
            return {...state, my: state.my.filter((element) => element._id !== action.payload)};
        case 'add_to_library':
            myBooks = state.my.concat(
                {
                    _id: action.payload._id,
                    writer: action.payload.writer,
                    title: action.payload.title,
                    price: action.payload.price,
                });
            return {
                ...state, my: myBooks
            };
        case 'get_wanted_books':
            return {...state, wanted: action.payload};
        case 'delete_wanted_book':
            return {...state, wanted: state.wanted.filter((element) => element._id !== action.payload)};
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
        default:
            return [];
    }
};

const fetchMyBooks = dispatch => () => {
    dispatch({type: 'get_my_books', payload: myBooks})
};
const deleteMyBook = dispatch => (id) => {
    dispatch({type: 'delete_my_book', payload: id})
};
const addBookToLibrary = dispatch => async (title, writer, price) => {
    const _id = (Math.max.apply(null, myBooks.map(e => e._id)) + 1).toString();
    dispatch({type: 'add_to_library', payload: {_id, title, writer, price}});
    let athToken = await AsyncStorage.getItem('token');
    try {
        const response = await fetch(`${gateway}/books`, {
                method: 'POST',
                headers: {
                    "content-type": 'application/json',
                    "authorization": `Bearer ${athToken}`
                },
                body: JSON.stringify({
                    library: myBooks
                }),
            }
        );
        if (!response.ok) {
            throw new Error("Problem with saving wanted books");
        }
    } catch (e) {
        console.error("BookContext addBookToWanted error: ", e);
    }
};

const fetchWantedBooks = dispatch => () => {
    dispatch({type: 'get_wanted_books', payload: wantedBooks})
};
const deleteWantedBook = dispatch => (id) => {
    dispatch({type: 'delete_wanted_book', payload: id})
};
const addBookToWanted = dispatch => async (title, writer, price) => {
    const _id = (Math.max.apply(null, wantedBooks.map(e => e._id)) + 1).toString();
    dispatch({type: 'add_to_wanted', payload: {_id, title, writer, price}});
    let athToken = await AsyncStorage.getItem('token');
    try {
        const response = await fetch(`${gateway}/books`, {
                method: 'POST',
                headers: {
                    "content-type": 'application/json',
                    "authorization": `Bearer ${athToken}`
                },
                body: JSON.stringify({
                    wanted: wantedBooks
                }),
            }
        );
        if (!response.ok) {
            throw new Error("Problem with saving wanted books");
        }
    } catch (e) {
        console.error("BookContext addBookToWanted error: ", e);
    }
};

export const {Provider, Context} = AbstractDataContext(
    booksReducer,
    {
        AbstractDataContext,
        fetchMyBooks, deleteMyBook,
        fetchWantedBooks, deleteWantedBook,
        addBookToLibrary, addBookToWanted
    },
    []
);

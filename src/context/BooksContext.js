import React from "react";
import AbstractDataContext from "./AbstractDataContext";

const wantedBooks = [
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
const myBooks = [
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

const booksReducer = (state, action) => {
    switch (action.type) {
        case 'get_my_books':
            console.info("BooksContext reducer: returning my lib");
            return {...state, my: action.payload};
        case 'delete_my_book':
            return {...state, my: state.my.filter((element) => element._id !== action.payload)};
        case 'add_to_library':
            return {...state, my: state.my.filter((element) => element._id !== action.payload)};
        case 'get_wanted_books':
            console.info("BooksContext reducer: returning wanted");
            return {...state, wanted: action.payload};
        case 'delete_wanted_book':
            return {...state, wanted: state.wanted.filter((element) => element._id !== action.payload)};
        case 'add_to_wanted':
            return {...state, wanted: state.wanted.filter((element) => element._id !== action.payload)};
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
const addBookToLibrary = dispatch => (book) => {
    dispatch({type: 'add_to_library', payload: book})
};

const fetchWantedBooks = dispatch => () => {
    dispatch({type: 'get_wanted_books', payload: wantedBooks})
};
const deleteWantedBook = dispatch => (id) => {
    dispatch({type:'delete_wanted_book', payload: id})
};
const addBookToWanted = dispatch => (book) => {
    dispatch({type: 'add_to_wanted', payload: book})
};

export const {Provider, Context} = AbstractDataContext(
    booksReducer,
    {AbstractDataContext,
        fetchMyBooks, deleteMyBook,
        fetchWantedBooks, deleteWantedBook,
        addBookToLibrary, addBookToWanted
    },
    []
);

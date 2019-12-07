import React from "react";
import AbstractDataContext from "./AbstractDataContext";

const authService = "https://evening-shelf-19061.herokuapp.com";
const wantedBooks = [
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
    {
        _id: "13",
        writer: "Alexandra Elizabeth Sheedy",
        title: "She Was Nice To Mice: The Other Side of Elizabeth I's Character Never Before Revealed by Previous Historians"
    },
];

const booksReducer = (state, action) => {
    switch (action.type) {
        case 'get_wanted':
            return action.payload;
        case 'delete_wanted':
            return state.filter((element) => element._id !== action.payload);
        default:
            return state;
    }
};

const fetchWantedBooks = dispatch => () => {
    dispatch({type: 'get_wanted', payload: wantedBooks})
};

const deleteBook = dispatch => (id) => {
    dispatch({type: 'delete_wanted', payload: id})
};

export const {Provider, Context} = AbstractDataContext(
    booksReducer,
    {fetchWantedBooks, AbstractDataContext, deleteBook},
    wantedBooks
);

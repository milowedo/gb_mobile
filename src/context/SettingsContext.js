import React from "react";
import AbstractDataContext from "./AbstractDataContext";
import {AsyncStorage} from "react-native";

const settingsReducer = (state, action) => {
    switch (action.type) {
        case 'update_pictures_property':
            console.info("SettingsContext reducer: setting imagesDownloading: ", action.payload.property);
            return {...state, imagesDownloading: action.payload.property};
        case 'initialize_pictures_property':
            console.info("SettingsContext reducer: initial value for imagesDownloading: ", action.payload.property);
            if (action.payload.property == null) {
                return {...state, imagesDownloading: true};
            } else {
                return {...state, imagesDownloading: action.payload.property === "true"};
            }
        default:
            console.log("BooksContext reducer : default")
            return state;
    }
};

const getImagesSettingProperty = dispatch => async () => {
    await AsyncStorage.getItem('imagesDownloading')
        .then(value => {
            console.log("Property imagesDownloading in asyncStorage: ", value)
            dispatch({type: 'initialize_pictures_property', payload: {property: value}});
        });
}

const setImagesSettingProperty = dispatch => async (flagValue) => {
    await AsyncStorage.setItem('imagesDownloading', flagValue + '')
        .then(() => {
            console.log("Property imagesDownloading was saved to the value ", flagValue);
            dispatch({type: 'update_pictures_property', payload: {property: flagValue}})
        })
}

export const {Provider, Context} = AbstractDataContext(settingsReducer, {
    AbstractDataContext,
    getImagesSettingProperty,
    setImagesSettingProperty,
}, {});

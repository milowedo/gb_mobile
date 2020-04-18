import {AsyncStorage} from "react-native";
import {navigate} from "../utils/navigationHelper";
import AbstractDataContext from "./AbstractDataContext";

const authService = "https://gb-auth.herokuapp.com";

const authenticationReducer = (state, action) => {
    console.info("AuthenticationContext reducer, type: " + action.type);
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signin':
            return {errorMessage: '', token: action.payload};
        case 'clear_error_message':
            return {...state, errorMessage: ''};
        case 'signout' :
            return {token: null, errorMessage: ''};
        default:
            return state;
    }
};

const signup = (dispatch) => async ({email, password}) => {
    try {
        const response = await fetch(`${authService}/signup`, {
                method: 'POST',
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            }
        );
        if (!response.ok) {
            throw new Error("Problem with authentication");
        }
        const responseObject = await response.json();
        await AsyncStorage.setItem('token', responseObject.token);
        dispatch({type: "signin", payload: responseObject.token});
        navigate('AppFlow');
    } catch (e) {
        dispatch({type: 'add_error', payload: "Something went wrong with sign up"})
    }
};

const signin = (dispatch) => async ({email, password}) => {
    try {
        const response = await fetch(`${authService}/signin`, {
                method: 'POST',
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            }
        );
        if (!response.ok) {
            throw new Error("Problem with authentication");
        }
        const responseObject = await response.json();
        await AsyncStorage.setItem('token', responseObject.token);
        dispatch({type: "signin", payload: responseObject.token});
        navigate('AppFlow');
    } catch (e) {
        console.log("AuthenticationContext signin", e);
        dispatch({type: 'add_error', payload: "Something went wrong with sign in"})
    }
};

const signout = (dispatch) => async ({email, password}) => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    navigate('AuthFlow')
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({type: "signin", payload: token});
        navigate('AppFlow');
    } else {
        navigate('Signup')
    }
};

const clearErrorMessage = (dispatch) => {
    return () => {
        dispatch({type: 'clear_error_message'})
    }
};

export const {Provider, Context} = AbstractDataContext(authenticationReducer, {
    signin,
    signup,
    signout,
    clearErrorMessage,
    tryLocalSignin,
}, {token: null});

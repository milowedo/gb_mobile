import React from 'react';
import SigninScreen from "../screens/authScreens/SigninScreen";
import SignupScreen from "../screens/authScreens/SignupScreen";
import {createSwitchNavigator} from "react-navigation";

const AuthStackNavigator = createSwitchNavigator(
    {
        Signin: SigninScreen,
        Signup: SignupScreen
    }, {
        initialRouteName: 'Signin'
    }
);

export default AuthStackNavigator;

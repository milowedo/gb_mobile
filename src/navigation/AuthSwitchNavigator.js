import React from 'react';
import SigninScreen from "../screens/authScreens/SigninScreen";
import SignupScreen from "../screens/authScreens/SignupScreen";
import {createStackNavigator} from "react-navigation-stack";

const AuthStackNavigator = createStackNavigator(
    {
        Signin: SigninScreen,
        Signup: SignupScreen
    },{
        initialRouteName: 'Signin'
    }
);

export default AuthStackNavigator;

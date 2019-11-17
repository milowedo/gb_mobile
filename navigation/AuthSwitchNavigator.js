import React from 'react';
import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
import {createStackNavigator} from "react-navigation-stack";

const AuthStackNavigator = createStackNavigator(
    {
        Signin: SigninScreen,
        Signup: SignupScreen,
    }
);

export default AuthStackNavigator;

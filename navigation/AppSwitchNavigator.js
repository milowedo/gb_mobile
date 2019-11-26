import React from 'react';
import WelcomeScreen from "../screens/WelcomeScreen";
import InnerTabNavigator from "./InnerTabNavigator";
import AuthSwitchNavigator from "./AuthSwitchNavigator";
import {createAppContainer} from "@react-navigation/native";
import createSwitchNavigator from "@react-navigation/core/src/navigators/createSwitchNavigator";

export default createAppContainer(
    createSwitchNavigator({
            Welcome: WelcomeScreen,
            AppFlow: InnerTabNavigator,
            AuthFlow: AuthSwitchNavigator,
        },
        {
            // initialRouteName: 'Welcome',
            initialRouteName: 'AuthFlow',
        }
    )
);

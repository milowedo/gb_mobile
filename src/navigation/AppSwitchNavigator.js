import React from 'react';
import WelcomeScreen from "../screens/WelcomeScreen";
import InnerTabNavigator from "./InnerTabNavigator";
import AuthSwitchNavigator from "./AuthSwitchNavigator";
import {createAppContainer} from "@react-navigation/native";
import createSwitchNavigator from "@react-navigation/core/src/navigators/createSwitchNavigator";
import ResolveAuthScreen from "../screens/ResolveAuthScreen";

export default createAppContainer(
    createSwitchNavigator({
            Resolve: ResolveAuthScreen,
            Welcome: WelcomeScreen,
            AuthFlow: AuthSwitchNavigator,
            AppFlow: InnerTabNavigator,
        },
        {
            initialRouteName: 'Resolve',
            // initialRouteName: 'AuthFlow',
        }
    )
);

import React from 'react';
import WelcomeScreen from "../screens/WelcomeScreen";
import InnerTabNavigator from "./InnerTabNavigator";
import AuthSwitchNavigator from "./AuthSwitchNavigator";
import ResolveAuthScreen from "../screens/authScreens/ResolveAuthScreen";
import SettingsScreen from "../screens/SettingsScreen";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer, createSwitchNavigator} from "react-navigation";

export default createAppContainer(
    createSwitchNavigator({
            Resolve: ResolveAuthScreen,
            Welcome: WelcomeScreen,
            AuthFlow: AuthSwitchNavigator,
            AppFlow: createSwitchNavigator({
                TabNav: InnerTabNavigator,
                Settings: createStackNavigator({Settings: SettingsScreen}),
            }, {
                backBehavior: 'order'
            }),
        },
        {
            initialRouteName: 'Resolve',
            // initialRouteName: 'AuthFlow',
        }
    )
);

import React from 'react';
import WelcomeScreen from "../screens/WelcomeScreen";
import InnerTabNavigator from "./InnerTabNavigator";
import AuthSwitchNavigator from "./AuthSwitchNavigator";
import {createAppContainer} from "@react-navigation/native";
import createSwitchNavigator from "@react-navigation/core/src/navigators/createSwitchNavigator";
import ResolveAuthScreen from "../screens/authScreens/ResolveAuthScreen";
import SettingsScreen from "../screens/SettingsScreen";
import {createStackNavigator} from "react-navigation-stack";

export default createAppContainer(
    createSwitchNavigator({
            Resolve: ResolveAuthScreen,
            Welcome: WelcomeScreen,
            AuthFlow: AuthSwitchNavigator,
            AppFlow: createSwitchNavigator({
                TabNav: InnerTabNavigator,
                Settings: createStackNavigator({Settings: SettingsScreen}),
            },{
                backBehavior: 'order'
            }),
        },
        {
            initialRouteName: 'Resolve',
            // initialRouteName: 'AuthFlow',
        }
    )
);

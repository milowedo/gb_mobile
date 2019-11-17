import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import TabBarIcon from "../components/TabBarIcon";
import MyLibraryScreen from "../screens/MyLibraryScreen";
import OffersScreen from "../screens/OffersScreen";
import WantedScreen from "../screens/WantedScreen";
import {createBottomTabNavigator} from "react-navigation-tabs";

const MyLibraryStack = createStackNavigator(
    {
        Library: MyLibraryScreen,
    }
);

MyLibraryStack.navigationOptions = {
    tabBarLabel: 'Library',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}/>
    ),
};


const WantedStack = createStackNavigator(
    {
        Offers: WantedScreen,
    },
);

WantedStack.navigationOptions = {
    tabBarLabel: 'Wanted',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}/>
    ),
};


const OffersStack = createStackNavigator(
    {
        Offers: OffersScreen,
    },
);

OffersStack.navigationOptions = {
    tabBarLabel: 'Offers',
    tabBarIcon: ({focused}) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}/>
    ),
};


const innerTabNavigator = createBottomTabNavigator({
        MyLibraryStack,
        WantedStack,
        OffersStack,
    }, {
        swipeEnabled: true,
    }
);


export default innerTabNavigator;

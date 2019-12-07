import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import MyLibraryScreen from "../screens/MyLibraryScreen";
import OffersScreen from "../screens/OffersScreen";
import WantedScreen from "../screens/WantedScreen";
import {createMaterialTopTabNavigator} from "react-navigation-tabs";
import {Icon} from "react-native-elements";

const MyLibraryStack = createStackNavigator(
    {
        Library: MyLibraryScreen,
    }
);

MyLibraryStack.navigationOptions = {
    swipeEnabled : false,
    tabBarLabel: 'Library',
    tabBarIcon: ({focused})  => (
        focused ? <Icon name="home" color="white"/> : <Icon name="home" color="#525257"/>
    ),
};


const WantedStack = createStackNavigator(
    {
        Wanted: WantedScreen,
    },
);

WantedStack.navigationOptions = {
    swipeEnabled : false,
    tabBarLabel: 'Wanted',
    tabBarIcon: ({focused})  => (
        focused ? <Icon name="home" color="white"/> : <Icon name="home" color="#525257"/>
    ),
};


const OffersStack = createStackNavigator(
    {
        Offers: OffersScreen,
    },
);

OffersStack.navigationOptions = {
    swipeEnabled : false,
    tabBarLabel: 'Offers',
    tabBarIcon: ({focused})  => (
        focused ? <Icon name="home" color="white"/> : <Icon name="home" color="#525257"/>
    ),
    tabBarOnPress: ({navigation}) => navigation.navigate("Offers")
};


const innerTabNavigator = createMaterialTopTabNavigator ({
        MyLibraryStack,
        WantedStack,
        OffersStack,
    },
    {
        swipeEnabled: false,
        tabBarPosition: 'bottom',
        lazy: true,
        animationEnabled: false,
        tabBarOptions: {
            inactiveTintColor:'#525257',
            showIcon: true,
            labelStyle: {
                textTransform: "lowercase",
            },
            indicatorStyle: {
                backgroundColor:'#517fa4'
            },
            tabStyle: {
                backgroundColor:'#517fa4'
            }
        }
    }
);


export default innerTabNavigator;

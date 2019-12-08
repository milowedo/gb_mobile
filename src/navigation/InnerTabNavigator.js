import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import MyLibraryScreen from "../screens/MyLibraryScreen";
import OffersScreen from "../screens/OffersScreen";
import WantedScreen from "../screens/WantedScreen";
import {createMaterialTopTabNavigator} from "react-navigation-tabs";
import {Icon} from "react-native-elements";
import {Dimensions} from "react-native";

const initialLayout = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
};

const MyLibraryStack = createStackNavigator(
    {
        Library: MyLibraryScreen,
    },
);

const WantedStack = createStackNavigator(
    {
        Wanted: WantedScreen,
    },
);

const OffersStack = createStackNavigator(
    {
        Offers: OffersScreen,
    },
);


MyLibraryStack.navigationOptions = {
    swipeEnabled : false,
    tabBarLabel: 'Library',
    tabBarIcon: ({focused})  => (
        focused ? <Icon name="home" color="white"/> : <Icon name="home" color="#525257"/>
    ),
    tabBarOnPress: ({navigation}) => navigation.navigate("Library")
};

WantedStack.navigationOptions = {
    swipeEnabled : false,
    tabBarLabel: 'Wanted',
    tabBarIcon: ({focused})  => (
        focused ? <Icon name="home" color="white"/> : <Icon name="home" color="#525257"/>
    ),
    tabBarOnPress: ({navigation}) => navigation.navigate("Wanted")
};

OffersStack.navigationOptions = {
    swipeEnabled : false,
    tabBarLabel: 'Offers',
    tabBarIcon: ({focused})  => (
        focused ? <Icon name="home" color="white"/> : <Icon name="home" color="#525257"/>
    ),
    tabBarOnPress: ({navigation}) => {
        navigation.navigate("Offers")
    }
};

const innerTabNavigator = createMaterialTopTabNavigator ({
        MyLibraryStack,
        WantedStack,
        OffersStack,
    },
    {
        initialLayout,
        swipeEnabled: false,
        tabBarPosition: 'bottom',
        lazy: true,
        animationEnabled: true,
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

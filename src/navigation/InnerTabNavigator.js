import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import MyLibraryScreen from "../screens/MyLibraryScreen";
import OffersScreen from "../screens/OffersScreen";
import WantedScreen from "../screens/WantedScreen";
import {createBottomTabNavigator} from "react-navigation-tabs";
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
    swipeEnabled: false,
    tabBarLabel: 'Library',
    tabBarIcon: ({focused}) => (
        focused ? <Icon name="home" color="white"/> : <Icon name="home" color="#525257"/>
    ),
};

WantedStack.navigationOptions = {
    swipeEnabled: false,
    tabBarLabel: 'Wanted',
    tabBarIcon: ({focused}) => (
        focused ? <Icon name="home" color="white"/> : <Icon name="home" color="#525257"/>
    ),
};

OffersStack.navigationOptions = {
    swipeEnabled: true,
    tabBarLabel: 'Offers',
    tabBarIcon: ({focused}) => (
        focused ? <Icon name="home" color="white"/> : <Icon name="home" color="#525257"/>
    )
};

const innerTabNavigator = createBottomTabNavigator({
        Library: MyLibraryStack,
        Wanted: WantedStack,
        Offers: OffersStack,
    },
    {
        initialLayout: initialLayout,
        // swipe works with createMaterialTopTabNavigator
        // swipeEnabled: true,
        tabBarPosition: 'bottom',
        lazy: true,
        animationEnabled: false,
        tabBarOptions: {
            style: {
                height: 60,
            },
            inactiveTintColor: '#525257',
            activeTintColor: 'white',
            showIcon: true,
            labelStyle: {
                textTransform: "lowercase",
                paddingBottom: 10,
                marginTop: 0,
            },
            indicatorStyle: {
                backgroundColor: '#517fa4'
            },
            tabStyle: {
                backgroundColor: '#517fa4'
            }
        }
    }
);

export default innerTabNavigator;

import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import MyLibraryScreen from "../screens/innerScreens/MyLibraryScreen";
import OffersScreen from "../screens/innerScreens/OffersScreen";
import WantedScreen from "../screens/innerScreens/WantedScreen";
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
        focused ? <Icon name="archive" type="evilicon" color="white"/> : <Icon name="archive" type="evilicon" color="#525257"/>
    ),
};

WantedStack.navigationOptions = {
    swipeEnabled: false,
    tabBarLabel: 'Wanted',
    tabBarIcon: ({focused}) => (
        focused ? <Icon name="search" type="evilicon" color="white"/> : <Icon name="search" type="evilicon" color="#525257"/>
    ),
};

OffersStack.navigationOptions = {
    swipeEnabled: true,
    tabBarLabel: 'Offers',
    tabBarIcon: ({focused}) => (
        focused ? <Icon name="cart" type="evilicon" color="white"/> : <Icon name="cart" type="evilicon" color="#525257"/>
    )
};

const innerTabNavigator = createBottomTabNavigator({
        Library: MyLibraryStack,
        Wanted: WantedStack,
        Offers: OffersStack,
    },
    {
        initialLayout: initialLayout,
        // INFO
        // swipe works with createMaterialTopTabNavigator
        // swipeEnabled: true,
        tabBarPosition: 'bottom',
        // TODO for offers development
        initialRouteName: 'Wanted',
        // initialRouteName: 'Offers',
        //TODO remove after
        lazy: true,
        animationEnabled: false,
        tabBarOptions: {
            style: {
                height: 60,
                justifyContent: 'center'
            },
            inactiveTintColor: '#525257',
            activeTintColor: 'white',
            showIcon: true,
            labelStyle: {
                textTransform: "lowercase",
                paddingBottom: 5,
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

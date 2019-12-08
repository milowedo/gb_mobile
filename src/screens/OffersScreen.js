import React from 'react'
import {Text, View} from "react-native";
import {headerStyles} from "../constants/Layouts";


const OffersScreen = () => {
    return (
        <View>
            <Text> Offers Screen </Text>
        </View>
    )
};

OffersScreen.navigationOptions = {
    title: 'Offers',
    headerStyle: headerStyles.headerStyle,
    headerTitleStyle: headerStyles.headerTitleStyle
};

export default OffersScreen;

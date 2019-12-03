import React from 'react'
import {Text, View} from "react-native";


const MyLibraryScreen = () => {
    return (
        <View>
            <Text>Library Screen </Text>
        </View>
    );
};

MyLibraryScreen.navigationOptions = {
    title: 'My library',
};

export default MyLibraryScreen;

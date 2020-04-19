import {Dimensions, StyleSheet} from "react-native";
import React from "react";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const windowLayout = {
    window: {
        width,
        height,
    },
    isSmallDevice: width < 375,
};

export const signingStyles = StyleSheet.create({
    errorMessage: {
        alignSelf: 'center',
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 150,
    },
    input: {
        marginBottom: 10,
        paddingHorizontal: 10,

    },
    inputIcons: {
        marginRight: 20
    },
    inputLabel: {
        paddingHorizontal: 10,
        color: '#517fa4',
    },
    submitButton: {
        backgroundColor: '#517fa4',
        width: '80%',
        alignSelf: "center",
    },
});

export const headerStyles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#517fa4',
        height: 90,
    },
    headerTitleStyle: {
        color: 'white'
    }
});


import 'react-native-gesture-handler'
import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import AppNavigator from './src/navigation/AppSwitchNavigator';
import {setNavigator} from "./src/utils/navigationHelper";
import {Provider as AuthenticationProvider} from './src/context/AuthenticationContext'
import {Provider as BooksProvider} from './src/context/BooksContext'

const authService = "https://evening-shelf-19061.herokuapp.com";

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        backend_heart_beat().then()
    }, []);

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => handleFinishLoading(setLoadingComplete)}
            />
        );
    } else {
        return (
            <View style={styles.container}>
                <BooksProvider>
                    <AuthenticationProvider>
                        <AppNavigator ref={setNavigator}/>
                    </AuthenticationProvider>
                </BooksProvider>
            </View>
        );
    }
}

async function loadResourcesAsync() {
    await Promise.all([
        Asset.loadAsync([
            require('./assets/images/robot-dev.png'),
            require('./assets/images/robot-prod.png'),
        ]),
        Font.loadAsync({
            // This is the font that we are using for our tab bar
            ...Ionicons.font,
            // We include SpaceMono because we use it in WelcomeScreen.js. Feel free to
            // remove this if you are not using it in your app
            'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        }),
    ]);
}

function handleLoadingError(error) {
    console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
}

const backend_heart_beat = async () => {
    try {
        const response = await fetch(`${authService}/beat`, {
                method: 'GET',
                headers: {
                    "content-type": 'application/json'
                },
            }
        );
        if (!response.ok) {
            throw new Error("Problem with backend occured");
        }
    } catch (e) {
        console.error(e.stackTrace);
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

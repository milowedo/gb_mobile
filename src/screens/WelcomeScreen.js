import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';

import {MonoText} from '../components/utilities/StyledText';

export default function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}>
                <View style={styles.welcomeContainer}>
                    <Image
                        source={
                            __DEV__
                                ? require('../../assets/images/icon_book.png')
                                : require('../../assets/images/robot-prod.png')
                        }
                        style={styles.welcomeImage}
                    />
                </View>

                <View style={styles.getStartedContainer}>

                    <Text style={styles.getStartedText}>Get started by opening</Text>

                    <View
                        style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
                        <MonoText>screens/HomeScreen.js</MonoText>
                    </View>

                    <Text style={styles.getStartedText}>
                        Change this text and your app will automatically reload.
                    </Text>
                </View>

                <View style={styles.continue}>
                    <TouchableOpacity onPress={() => navigation.navigate('AuthFlow')} style={styles.helpLink}>
                        <Text style={styles.helpLinkText}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    );
}

WelcomeScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {width: 0, height: -3},
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    continue: {
        marginTop: 100,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});

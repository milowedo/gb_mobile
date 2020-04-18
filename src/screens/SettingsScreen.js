import React, {useContext, useEffect, useState} from 'react';
import {Button, CheckBox, Icon} from "react-native-elements";
import {navigate} from "../utils/navigationHelper";
import {AsyncStorage, StyleSheet, Text, View} from "react-native";
import MarginWrapper from "../components/utilities/MarginWrapper";
import {Context} from "../context/AuthenticationContext";
import {headerStyles} from "../constants/Layouts";


const SettingsScreen = () => {
    const {signout} = useContext(Context);
    const [downloadPicturesFlag, setDownloadFlag] = useState(true);

    useEffect(() => {
        fetchProperty();
        return () => {}
    }, []);

    async function fetchProperty() {
        const savedProperty = await AsyncStorage.getItem('downloadPictures');
        if (savedProperty !== null) {
            setDownloadFlag(savedProperty === 'true');
        }
    }

    async function saveProperty(currentValue) {
        await AsyncStorage.setItem('downloadPictures', !currentValue + '');
    }

    return (
        <View style={{flex: 1, alignItems: 'center', paddingHorizontal: 50, marginTop: 100}}>
            <MarginWrapper>
                <Button title={"Sign out"} onPress={signout}/>
            </MarginWrapper>
            <CheckBox
                center
                title='Download offer pictures (uses cellular data)'
                checked={downloadPicturesFlag}
                onPress={() => {
                    saveProperty(downloadPicturesFlag)
                    setDownloadFlag(!downloadPicturesFlag)
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    }
});

SettingsScreen.navigationOptions = {
    headerTitle: 'Settings',
    headerStyle: headerStyles.headerStyle,
    headerTitleStyle: headerStyles.headerTitleStyle,
    headerRight: () => (
        <Icon
            size={30}
            containerStyle={{paddingRight: 10}}
            name="minus"
            type="evilicon"
            color="white"
            onPress={
                () => {
                    navigate("Back", {current: "Settings"})
                }
            }
        />
    ),
};

export default SettingsScreen;

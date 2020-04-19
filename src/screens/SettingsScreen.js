import React, {useContext, useEffect, useState} from 'react';
import {Button, CheckBox, Icon} from "react-native-elements";
import {navigate} from "../utils/navigationHelper";
import {StyleSheet, View} from "react-native";
import MarginWrapper from "../components/utilities/MarginWrapper";
import {Context as AuthContext} from "../context/AuthenticationContext";
import {Context as SettingsContext} from "../context/SettingsContext";
import {headerStyles} from "../constants/Layouts";

const SettingsScreen = () => {
    const {signout} = useContext(AuthContext);
    const {state: {imagesDownloading}, getImagesSettingProperty, setImagesSettingProperty} = useContext(SettingsContext);
    const [downloadPicturesFlag, setDownloadFlag] = useState(true);

    useEffect(() => {
        let mounted = true;
        console.log("In the settingsScreen useffect")
        if (mounted) {
            if (imagesDownloading !== undefined) {
                setDownloadFlag(imagesDownloading);
            } else {
                getImagesSettingProperty()
            }
        }
        return () => {
            mounted = false;
        }
    }, [imagesDownloading]);

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
                    setDownloadFlag(!downloadPicturesFlag)
                    setImagesSettingProperty(!downloadPicturesFlag);
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

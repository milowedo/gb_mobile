import React, {useContext} from 'react';
import {Button, Icon, Text} from "react-native-elements";
import {headerStyles} from "../constants/Layouts";
import {navigate} from "../utils/navigationHelper";
import {StyleSheet} from "react-native";
import MarginWrapper from "../components/utilities/MarginWrapper";
import {Context} from "../context/AuthenticationContext";


const SettingsScreen = ({navigation}) => {
    const {signout} = useContext(Context);

    return (
        <>
            <MarginWrapper>
                <Button title={"Sign out"} onPress={signout}/>
            </MarginWrapper>
        </>
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
            name="home"
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

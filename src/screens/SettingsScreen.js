import React, {useContext} from 'react';
import {Button, Icon, Text} from "react-native-elements";
import {headerStyles} from "../constants/Layouts";
import {navigate} from "../utils/navigationHelper";
import {StyleSheet} from "react-native";
import SpacingViewComponent from "../components/SpacingViewComponent";
import {Context} from "../context/AuthenticationContext";


const SettingsScreen = ({navigation}) => {
    const {signout} = useContext(Context);

    return (
        <>
            <Text h2 >Woah settings screen</Text>
            <SpacingViewComponent>
                <Button title={"Sign out"} onPress={signout}/>
            </SpacingViewComponent>
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

import React, {useContext} from 'react';
import {Button, Icon, Text} from "react-native-elements";
import {headerStyles} from "../constants/Layouts";
import {navigate} from "../utils/navigationHelper";
import {StyleSheet, View} from "react-native";
import MarginWrapper from "../components/utilities/MarginWrapper";
import {Context} from "../context/AuthenticationContext";


const SettingsScreen = ({navigation}) => {
    const {signout} = useContext(Context);

    return (
        <View style={{flex:1, alignItems:'center', paddingHorizontal: 50, marginTop: 100}}>
            <MarginWrapper>
                <Button title={"Sign out"} onPress={signout}/>
            </MarginWrapper>
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

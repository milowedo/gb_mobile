import {Icon} from "react-native-elements";
import {navigate} from "../../utils/navigationHelper";
import React from "react";

const settingsIcon = () => (
    <Icon
        name="home"
        color="white"
        onPress={
            () => {
                navigate("Settings")
            }
        }
    />
);
export default settingsIcon();

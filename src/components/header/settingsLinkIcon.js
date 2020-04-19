import {Icon} from "react-native-elements";
import {navigate} from "../../utils/navigationHelper";
import React from "react";

const settingsIcon = () => (
    <Icon
        size={30}
        containerStyle={{paddingRight: 20}}
        name="gear"
        type='evilicon'
        color="white"
        onPress={
            () => {
                navigate("Settings")
            }
        }
    />
);
export default settingsIcon();

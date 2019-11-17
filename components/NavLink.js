import {StyleSheet, TouchableOpacity} from "react-native";
import SpacingViewComponent from "./SpacingViewComponent";
import {Text} from "react-native-elements";
import React from "react";
import {withNavigation} from "react-navigation";


const NavLink = ({navigation, text, routeName}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate({routeName})}>
            <SpacingViewComponent>
                <Text style={styles.navLink}>{text}</Text>
            </SpacingViewComponent>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    navLink: {
        color: 'blue'
    }
});

export default withNavigation(NavLink);

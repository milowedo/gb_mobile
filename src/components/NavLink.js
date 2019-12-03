import {StyleSheet, TouchableOpacity} from "react-native";
import SpacingViewComponent from "./SpacingViewComponent";
import {Text} from "react-native-elements";
import React from "react";
import {withNavigation} from "react-navigation";


const NavLink = ({navigation, text, routeName, containerStyle}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate({routeName})} style={containerStyle}>
            <SpacingViewComponent>
                <Text style={styles.navLink}>{text}</Text>
            </SpacingViewComponent>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    navLink: {
        color: '#517fa4'
    },

});

export default withNavigation(NavLink);

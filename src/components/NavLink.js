import {StyleSheet, TouchableOpacity} from "react-native";
import MarginWrapper from "./utilities/MarginWrapper";
import {Text} from "react-native-elements";
import React from "react";
import {withNavigation} from "react-navigation";


const NavLink = ({navigation, text, routeName, containerStyle}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate({routeName})} style={containerStyle}>
            <MarginWrapper>
                <Text style={styles.navLink}>{text}</Text>
            </MarginWrapper>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    navLink: {
        color: '#517fa4'
    },

});

export default withNavigation(NavLink);

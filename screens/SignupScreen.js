import React, {useContext} from 'react';
import {StyleSheet, View} from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {NavigationEvents} from "react-navigation";

const SignupScreen = ({navigation}) => {

    //const {state, signup, clearErrorMessage, tryLocalSignin} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={null}/>
            <AuthForm
                errorMessage={null}
                headerText="Sign up for tracker"
                callbackOnSubmit={() => navigation.navigate('AppFlow')}
                submitButtonTitle="Sign up"
            />
            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead"
            />
        </View>
    )
};

SignupScreen.navigationOptions = () => {
    return {
        header: null
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    }
});

export default SignupScreen;


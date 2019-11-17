import React, {useContext} from 'react';
import {StyleSheet, View} from "react-native";
import AuthForm from "../components/AuthForm";
import {NavigationEvents} from "react-navigation";
import NavLink from "../components/NavLink";

const SigninScreen = ({navigation}) => {

    //const {state, signin, clearErrorMessage} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={null}/>
            <AuthForm
                errorMessage={null}
                headerText="Sign in to your account"
                callbackOnSubmit={() => navigation.navigate('AppFlow')}
                submitButtonTitle="Sign in"
            />
            <NavLink
                routeName="Signup"
                text="Don't have an account? Sign up instead"
            />
        </View>
    )
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;


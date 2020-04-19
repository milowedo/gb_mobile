import React, {useContext} from 'react';
import {View} from "react-native";
import AuthForm from "../../components/forms/AuthForm";
import {NavigationEvents} from "react-navigation";
import NavLink from "../../components/NavLink";
import {signingStyles as styles} from "../../constants/Layouts"
import {Context as AuthContext} from "../../context/AuthenticationContext";

const SigninScreen = () => {

    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={clearErrorMessage}/>
            <AuthForm
                errorMessage={state.errorMessage}
                headerText="Sign in"
                callbackOnSubmit={signin}
                submitButtonTitle="Sign in"
                clearErrorCallback={clearErrorMessage}
            />
            <NavLink
                containerStyle={{position: 'absolute', bottom: 0}}
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

export default SigninScreen;


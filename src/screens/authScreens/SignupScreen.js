import React, {useContext} from 'react';
import {View} from "react-native";
import AuthForm from "../../components/AuthForm";
import NavLink from "../../components/NavLink";
import {NavigationEvents} from "react-navigation";
import {signingStyles as styles} from "../../constants/Layouts"
import {Context as AuthContext} from "../../context/AuthenticationContext";


const SignupScreen = () => {

    const {state, signup, clearErrorMessage} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={clearErrorMessage}/>
            <AuthForm
                errorMessage={state.errorMessage}
                headerText="Sign up"
                callbackOnSubmit={signup}
                submitButtonTitle="Sign up"
            />
                <NavLink
                    containerStyle={{position:'absolute', bottom:0}}
                    text="Already have an account? Sign in instead"
                    routeName="Signin"
                />
        </View>
    )
};

SignupScreen.navigationOptions = () => {
    return {
        header: null
    }
};

export default SignupScreen;


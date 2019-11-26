import React, {useContext} from 'react';
import {View} from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import {NavigationEvents} from "react-navigation";
import {signingStyles as styles} from "../constants/Layouts"

const SignupScreen = ({navigation}) => {

    //const {state, signup, clearErrorMessage, tryLocalSignin} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={null}/>
            <AuthForm
                errorMessage={null}
                headerText="Sign up"
                callbackOnSubmit={() => navigation.navigate('AppFlow')}
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


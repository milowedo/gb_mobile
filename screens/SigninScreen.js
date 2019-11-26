import React, {useContext} from 'react';
import {View} from "react-native";
import AuthForm from "../components/AuthForm";
import {NavigationEvents} from "react-navigation";
import NavLink from "../components/NavLink";
import {signingStyles as styles} from "../constants/Layouts"

const SigninScreen = ({navigation}) => {

    //const {state, signin, clearErrorMessage} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={null}/>
            <AuthForm
                errorMessage={null}
                headerText="Sign in"
                callbackOnSubmit={() => navigation.navigate('AppFlow')}
                submitButtonTitle="Sign in"
            />
            <NavLink
                containerStyle={{position:'absolute', bottom:0}}
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


import React, {useState} from "react";
import {StyleSheet} from "react-native";
import SpacingViewComponent from "./SpacingViewComponent";
import {Button, Input, Text} from "react-native-elements";

const AuthForm = ({errorMessage, headerText, callbackOnSubmit, submitButtonTitle}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <SpacingViewComponent>
                <Text h3>{headerText}</Text>
            </SpacingViewComponent>
            <Input
                value={email}
                label="Email"
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input
                secureTextEntry
                value={password}
                label="Password"
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <SpacingViewComponent margin={20}>
                <Button
                    onPress={() => {
                        callbackOnSubmit({email, password});
                    }}
                    title={submitButtonTitle}/>
            </SpacingViewComponent>
        </>
    )
};

const styles = StyleSheet.create({
    errorMessage: {
        alignSelf: 'center',
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
});

export default AuthForm;

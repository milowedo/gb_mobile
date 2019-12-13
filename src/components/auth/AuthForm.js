import React, {useState} from "react";
import MarginWrapper from "../utilities/MarginWrapper";
import {Button, Icon, Input, Text} from "react-native-elements";
import {signingStyles as styles} from "../../constants/Layouts"

const AuthForm = ({errorMessage, headerText, callbackOnSubmit, submitButtonTitle}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <MarginWrapper margin={30}>
                <Text h2>{headerText}</Text>
            </MarginWrapper>
            <Input
                inputContainerStyle={styles.input}
                placeholder={"maya@gmail.com"}
                rightIcon={
                    <Icon
                        name='user'
                        type='evilicon'
                        color='#517fa4'
                        size={28}
                    />
                }
                rightIconContainerStyle={styles.inputIcons}
                value={email}
                label="email address"
                labelStyle={styles.inputLabel}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Input
                inputContainerStyle={styles.input}
                placeholder={"kCj!cC#gL8c"}
                rightIcon={
                    <Icon
                        name='lock'
                        type='evilicon'
                        color='#517fa4'
                        size={28}
                    />
                }
                label="password"
                labelStyle={styles.inputLabel}
                rightIconContainerStyle={styles.inputIcons}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <MarginWrapper margin={20}>
                <Button
                    buttonStyle={styles.submitButton}
                    onPress={() => {
                        callbackOnSubmit({email, password});
                    }}
                    title={submitButtonTitle}/>
            </MarginWrapper>
        </>
    )
};

export default AuthForm;

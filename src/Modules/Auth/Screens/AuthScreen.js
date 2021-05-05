import React, { useState } from 'react';
import { Alert, Text } from 'react-native';
import validate from 'validate.js';
import { useDispatch } from 'react-redux';

import AuthScreenUI from './AuthScreenUI';
import { signUpRequest, signInRequest } from '../Redux/UserRedux';
import { updateUser } from '../API/Firebase';
import { setErrorMessageAC, setIsErrorAC } from '../../Error/ErrorRedux';
import { useLocalization, Texts, errorList } from '../../Localization';


const isValidEmail = email => {
    let constraints = {
        from: {
            email: true
        }
    }
    return validate({ from: email }, constraints) === undefined;
}

const AuthScreen = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [name, setName] = useState('');

    const dispatch = useDispatch();

    const  loc=useLocalization();

    const _onPress_SignUp = () => {
        if (email.length === 0 || password.length === 0 || name.length === 0) {
            dispatch(setErrorMessageAC(loc.t(Texts.emptySpace)));
            dispatch(setIsErrorAC(true)); 
        }
        else if (!isValidEmail(email)) {
            dispatch(setErrorMessageAC(loc.t(Texts.checkEmail)));
            dispatch(setIsErrorAC(true));            
        }
        else {
            dispatch(signUpRequest(email, password, name));
        }
    }

    const _onPress_SignIn = () => {
        if (email.length === 0 || password.length === 0) {
            dispatch(setErrorMessageAC(loc.t(Texts.emptySpace)));
            dispatch(setIsErrorAC(true));  
        }
        else {
            dispatch(signInRequest(email, password));
        }
    }
    return (
        <AuthScreenUI
            emailValue={email}
            passwordValue={password}
            passwordConfirmValue={passwordConfirm}
            nameValue={name}
            onChangeText_Email={setEmail}
            onChangeText_Password={setPassword}
            onChangeText_PasswordConfirm={setPasswordConfirm}
            onChangeText_Name={setName}
            onPress_SignUp={_onPress_SignUp}
            onPress_SignIn={_onPress_SignIn}
        />
    );
};

export default AuthScreen;

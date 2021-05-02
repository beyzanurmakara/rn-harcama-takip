import React, { useState } from 'react';
import { 
    Image, 
    Keyboard, 
    KeyboardAvoidingView,
    Platform, 
    SafeAreaView, 
    Text, 
    TouchableOpacity,
    View, 
} from 'react-native';

import { Texts, useLocale, useLocalization } from '../../Localization';
import { useThemedStyles } from '../../Theming';
import { Images } from '../../../StylingConstants'
import AuthInput from '../Components/AuthInput';
import AuthButton from '../Components/AuthButton';

import getStyles from '../Styles/AuthScreenStyles';

const AuthScreenUI = props => {

    const [isLogin, setIsLogin] = useState(true);

    const styles = useThemedStyles(getStyles);
    const loc = useLocalization();

    const locale =useLocale();

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.keyboardAvoiding}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                keyboardVerticalOffset={0}>
                <TouchableOpacity
                    style={styles.container}
                    activeOpacity={1}
                    onPress={Keyboard.dismiss}
                >
                    <View style={styles.appLogoContainer}>
                        <Image source={Images.appLogoLight} style={styles.image}/>
                    </View>
                    <View style={styles.inputsContainer}>
                        {
                            isLogin ?
                                null
                                :
                                <View style={styles.inputContainer}>
                                    <AuthInput
                                        value={props.nameValue}
                                        onChangeText={props.onChangeText_Name}
                                        autoCapitalize={'words'}
                                        placeholder={loc.t(Texts.username)} />
                                </View>
                        }
                        <View style={styles.inputContainer}>
                            <AuthInput
                                value={props.emailValue}
                                onChangeText={props.onChangeText_Email}
                                autoCapitalize={'none'}
                                placeholder={loc.t(Texts.email)} />
                        </View>
                        <View style={styles.inputContainer}>
                            <AuthInput
                                value={props.passwordValue}
                                onChangeText={props.onChangeText_Password}
                                autoCapitalize={'none'}
                                placeholder={loc.t(Texts.password)}
                                secureTextEntry={true} />
                        </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <AuthButton
                            onPress={isLogin ? props.onPress_SignIn : props.onPress_SignUp}
                            disabled={false}
                            text={isLogin ? (loc.t(Texts.login)).toUpperCase() : (loc.t(Texts.signUp)).toUpperCase()} />
                        <TouchableOpacity style={styles.signupTouchable} onPress={() => setIsLogin(!isLogin)}>
                            <Text style={styles.signupText}>
                                {isLogin ? loc.t(Texts.signUp) : loc.t(Texts.login)}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.appNameContainer}>
                        <Text style={styles.appNameText}>HARCAMALARIM</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default AuthScreenUI;

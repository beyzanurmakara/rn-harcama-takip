import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useLocalization, Texts, Locales, useLocale, useChangeLocale, useLocaleOptions } from '../../Localization';
import { ThemeModes, useTheme, useThemedStyles, useThemeOptions, useDispatchChangeTheme, useChangeTheme } from '../../Theming';
import Icon from '../../../Components/Icon';
import { signOutRequest, userSelector } from '../../Auth';

import getStyles from '../styles/SettingsScreenStyles';
import { Svgs } from '../../../StylingConstants';
import OptionMenu from '../Components/OptionMenu';


const SettingsScreen = props => {

    const styles = useThemedStyles(getStyles);
    const currentTheme = useTheme();
    const changeTheme = useChangeTheme();
    const themeOptions = useThemeOptions();

    const loc = useLocalization();
    const currentLocale = useLocale();
    const changeLocale = useChangeLocale();
    const localeOptions = useLocaleOptions();

    const user = useSelector(userSelector);

    const dispatch = useDispatch();
    const _onSelect_Locale = (key) => {
        changeLocale(key);
    }
    const _onSelect_Theme = (key) => {
        changeTheme(key);
    }

    const _onPress_SignOut = () => {
        dispatch(signOutRequest());
    }


    const onPress_DisplayName = () => {
        props.navigation.navigate('profile-screen');
    }
    return (

        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.userContainer}>
                    <View onPress={onPress_DisplayName}>
                        <Text style={styles.nameText}>
                            {user.displayName}
                        </Text>
                    </View>
                    <Text style={styles.emailText}>
                        {user.email}
                    </Text>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={onPress_DisplayName}>
                            <Icon svg={Svgs.Profile} iconStyle={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexGrow: 1 }}>
                    <OptionMenu
                        menuTitle={loc.t(Texts.language)}
                        options={localeOptions}
                        selectedOptionKey={currentLocale}
                        onSelect={_onSelect_Locale}
                    />
                    <OptionMenu
                        menuTitle={loc.t(Texts.colorTheme)}
                        options={themeOptions}
                        selectedOptionKey={currentTheme}
                        onSelect={_onSelect_Theme}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.signOutTouchable} onPress={_onPress_SignOut}>
                        <Text style={styles.signOutText}>
                            {loc.t(Texts.signOut)}
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>

    );
};

export default SettingsScreen;

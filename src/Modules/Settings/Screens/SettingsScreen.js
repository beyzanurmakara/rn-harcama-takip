import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { useLocalization, Texts, Locales, useLocale, useChangeLocale, useLocaleOptions } from '../../Localization';
import { ThemeModes, useTheme, useThemedStyles, useThemeOptions, useDispatchChangeTheme, useChangeTheme } from '../../Theming';
import Icon from '../../../Components/Icon';

import getStyles from '../styles/SettingsScreenStyles';
import { Svgs } from '../../../StylingConstants';
import OptionMenu from '../Components/OptionMenu';

const SettingsScreen = props => {

    const styles = useThemedStyles(getStyles);
    const currentTheme = useTheme();
    const changeTheme = useChangeTheme();
    const themeOptions = useThemeOptions();

    const loc=useLocalization();
    const currentLocale = useLocale(); 
    const changeLocale = useChangeLocale();   
    const localeOptions = useLocaleOptions();


    const _onSelect_Locale=(key)=>{
        changeLocale(key);       
    }
    const _onSelect_Theme=(key)=>{
        changeTheme(key);
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <View style={styles.userContainer}>
                    <Text style={styles.nameText}>
                        BEYZA NUR MAKARA
                    </Text>
                    <Text style={styles.emailText}>
                        beyzamakara@mail.com
                    </Text>
                </View>
                <View style={{flexGrow:1}}>
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
                    <TouchableOpacity style={styles.signOutTouchable} onPress={() => console.log("bastın!")}>
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

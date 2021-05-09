import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';

import { useLocalization, Texts, Locales, useLocale, useChangeLocale, useLocaleOptions } from '../../Localization';
import { ThemeModes, useTheme, useThemedStyles, useThemeOptions, useDispatchChangeTheme, useChangeTheme } from '../../Theming';
import Icon from '../../../Components/Icon';
import { signOutRequest, userSelector } from '../../Auth';

import getStyles from '../styles/SettingsScreenStyles';
import { Svgs } from '../../../StylingConstants';
import OptionMenu from '../Components/OptionMenu';
import EditProfile from '../Components/EditProfile';


const SettingsScreen = props => {

    const [isModalVisible, setIsModalVisible] = useState(false);

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
    const _onPress_EditProfile = () => {
        setIsModalVisible(true)
    }
    const _onPress_ModalBackdrop = () => {
        setIsModalVisible(false);
    }

    const onPress_DisplayName=()=>{
        props.navigation.navigate('profile-screen');
    }
    return (
        <>
            <View style={styles.container}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.userContainer}>
                        <TouchableOpacity onPress={onPress_DisplayName}>
                            <Text style={styles.nameText}>
                                {user.displayName}
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.emailText}>
                            {user.email}
                        </Text>
                        <TouchableOpacity onPress={_onPress_EditProfile}>
                            <Text style={styles.updateProfile}>{loc.t(Texts.editProfile)}</Text>
                        </TouchableOpacity>
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
            <Modal
                isVisible={isModalVisible}
                // arkaplana tıklayınca fonksiyonu
                onBackdropPress={_onPress_ModalBackdrop}
                style={styles.modal}
                // açılış animasyonu
                animationIn='bounceInLeft'
                // kapanış animasyonu
                animationOut='bounceOutRight'
                animationInTiming={1000}
                animationOutTiming={1000}
            >
                <EditProfile isVisibleMode={()=>setIsModalVisible(false)} />
            </Modal>
        </>
    );
};

export default SettingsScreen;

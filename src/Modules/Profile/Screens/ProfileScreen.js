import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';

import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import { getCurrentUser } from '../../Auth';
import { totalSelector } from '../../Homepage/Redux/TotalRedux';
import { Texts, useLocalization } from '../../Localization';
import { getProfileSubscribe } from '../API/Firebase';
import { useThemedColors, useThemedStyles, colorNames } from '../../Theming';
import EditProfile from '../Components/EditProfile';

import getStyles from '../styles/ProfileScreenStyles';
import { setWarningCodeAC } from '../../Warning/WarningRedux';

const ProfileScreen = props => {

    const [profile, setProfile] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const total = useSelector(totalSelector);

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const user = getCurrentUser();
    const loc = useLocalization();

    const dispatch = useDispatch();

    useEffect(() => {
        const off = getProfileSubscribe(data => {
            setProfile(data);
        });
        return () => {
            off();
        }
    }, []);

    useEffect(() => {
        if (profile?.total > profile?.expense && profile?.expense > 0) {
            //dispatch(setWarningCodeAC('Limiti aştınız'+(parseFloat(profile?.total)-parseFloat(profile?.expense)).toString()))
        }
        // else if () {
        //     console.log('Sınırı aştınız ->', parseFloat(profile?.total) - parseFloat(profile?.expense))
        // }

    }, [profile?.total]);

    useEffect(() => {
        const mode = props.route.params;
        //console.log('settings screen mode', mode)
        if (mode) {
            setIsModalVisible(mode)
        }
    }, []);

    const _onPress_ModalBackdrop = () => {
        setIsModalVisible(false);
    }
    return (
        <>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                    <TouchableOpacity style={styles.userContainer}>
                        <Text style={styles.text}>{user.displayName}</Text>
                        <Text style={styles.text}>{user.email}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoHeader}>{loc.t(Texts.informations).toUpperCase()}</Text>
                    {
                        profile !== null ?
                            <>
                                <Text style={styles.infoText}>{loc.t(Texts.income)}: ₺{profile?.income}</Text>
                                <Text style={styles.infoText}>{loc.t(Texts.expenseLimit)}:{profile?.expense !== 0 ? '₺'+ profile?.expense : loc.t(Texts.notDetermined)}</Text>
                            </>
                            :
                            null
                    }
                    <Text style={[styles.infoText, { color: (profile?.total > profile?.expense && profile?.expense > 0) ? colors[colorNames.homePage.deleteButtonBackground] : colors[colorNames.editProfile.text] }]}>{loc.t(Texts.total)}: ₺{profile !== null ? profile.total : total}</Text>
                </View>
                <TouchableOpacity style={styles.iconContainer} onPress={() => setIsModalVisible(true)}>
                    <Icon svg={Svgs.Edit} iconStyle={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'pink', height: 300 }}>
                <Text>İstatistiksel Bilgiler Yer Alacak</Text>
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
                <EditProfile isVisibleMode={() => setIsModalVisible(false)} />
            </Modal>
        </>
    );
};

export default ProfileScreen;

import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
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
import Chart from '../Components/Chart';

const ProfileScreen = props => {

    const [profile, setProfile] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const total = useSelector(totalSelector);

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const user = getCurrentUser();
    const loc = useLocalization();


    useEffect(() => {
        const off = getProfileSubscribe(data => {
            setProfile(data);
        });
        return () => {
            off();
        }
    }, []);


    useEffect(() => {
        const mode = props.route.params;
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
                {
                    profile !== null ?
                        <Chart profile={profile} />
                        :
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoHeader}>{loc.t(Texts.informations).toUpperCase()}</Text>
                            <Text style={[styles.infoText, { color: (profile?.total > profile?.expense && profile?.expense > 0) ? colors[colorNames.homePage.deleteButtonBackground] : colors[colorNames.editProfile.text] }]}>{loc.t(Texts.total)}: ₺{profile !== null ? profile.total : total}</Text>
                        </View>
                }
                <TouchableOpacity style={styles.iconContainer} onPress={() => setIsModalVisible(true)} disabled={profile!==null?false:true}>
                    <Icon svg={Svgs.Edit} iconStyle={styles.icon} />
                </TouchableOpacity>
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

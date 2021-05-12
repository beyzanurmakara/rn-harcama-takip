import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { getCurrentUser } from '../../Auth';
import { useLocalization } from '../../Localization';
import { useThemedStyles } from '../../Theming';

import getStyles from '../styles/ProfileScreenStyles';

const ProfileScreen = props => {

    const styles = useThemedStyles(getStyles);
    const user = getCurrentUser();
    const loc = useLocalization();

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity style={styles.userContainer}>
                    <Text style={styles.text}>{user.displayName}</Text>
                    <Text style={styles.text}>{user.email}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoHeader}>{'Bilgilerim'.toUpperCase()}</Text>
                <Text style={styles.infoText}>Gelir: 5000</Text>
                <Text style={styles.infoText}>Harcama Limiti: Belirlenmemiş</Text>
                <Text style={styles.infoText}>Bu Ay Yapılan Toplam Harcamanız: 2500</Text>
            </View>
        </View>
    );
};

export default ProfileScreen;

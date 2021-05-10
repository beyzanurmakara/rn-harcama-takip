import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useThemedStyles } from '../../Theming';
import getStyles from '../styles/CreateProfileStyles';

const CreateProfile = props => {
    const navigation = useNavigation();
    const styles = useThemedStyles(getStyles);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profil oluşturursanız gelişmiş özellikleri kullanabilirsiniz</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('settings-screen', true)}>
                    <Text style={[styles.text,{ color: 'red' },]}>Buradan</Text>
                </TouchableOpacity>
                <Text style={styles.text}> oluşturabilirsin</Text>
            </View>

        </View>


    );
};

export default CreateProfile;

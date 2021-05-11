import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useThemedStyles } from '../../Theming';
import { useLocalization, Texts, useLocale } from '../../Localization';
import getStyles from '../styles/CreateProfileStyles';

const CreateProfile = props => {
    const navigation = useNavigation();
    const styles = useThemedStyles(getStyles);
    const loc = useLocalization();
    const currentLocale = useLocale();
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>{loc.t(Texts.createProfileText1)}</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        currentLocale === 'en' ?
                            <>
                                <Text style={styles.text}>{loc.t(Texts.createProfileText2)}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('settings-screen', true)}>
                                    <Text style={styles.fromHereText}> {loc.t(Texts.fromHere)}</Text>
                                </TouchableOpacity>
                            </>
                            :
                            <>
                                <TouchableOpacity onPress={() => navigation.navigate('settings-screen', true)}>
                                    <Text style={styles.fromHereText}>{loc.t(Texts.fromHere)}</Text>
                                </TouchableOpacity>
                                <Text style={styles.text}> {loc.t(Texts.createProfileText2)}</Text>
                            </>
                    }

                </View>
            </View>

        </View>


    );
};

export default CreateProfile;

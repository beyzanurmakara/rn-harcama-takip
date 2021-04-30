import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { useLocalization, Texts } from '../../Localization';
import { useThemedStyles } from '../../Theming';

import getStyles from '../styles/HomepageScreenStyles';

const SettingsScreen = props => {

    const styles = useThemedStyles(getStyles);

    const loc=useLocalization();

    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <View  style={{ flexGrow:1, padding:10}}>
                    <View style={styles.boxContainer}>
                        <Text style={styles.headerText}>Market</Text>
                        <Text style={styles.priceText}>100.00</Text>
                        <Text style={styles.dateText}>30.04.2021</Text>
                        <Text style={styles.dayText}>Pzt</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default SettingsScreen;

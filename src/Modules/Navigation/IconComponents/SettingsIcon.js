import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colorNames, useThemedStyles } from '../../Theming';
import { Metrics, Svgs } from '../../../StylingConstants';
import Icon from '../../../Components/Icon';

const getStyles = Color => StyleSheet.create({
    iconContainer: {
        width: Metrics.width * 0.06,
        height: undefined,
        aspectRatio: 1,
        marginRight: Metrics.marginHorizontal,
    },
    icon: {
        color: Color[colorNames.header.rightIcon],
    }
})

const SettingIcon = props => {
    const styles = useThemedStyles(getStyles);

    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('settings-screen')} >
            <Icon iconStyle={styles.icon} svg={Svgs.Settings} />
        </TouchableOpacity>
    );
};

export default SettingIcon;

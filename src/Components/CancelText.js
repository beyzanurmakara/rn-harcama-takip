import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { useLocalization, Texts } from '../Modules/Localization';
import { useThemedColors, useThemedStyles, colorNames } from '../Modules/Theming';

import getStyles from './styles/CancelTextStyles';

const CancelText = props => {

    const colors = useThemedColors();
    const loc=useLocalization();
    const styles=useThemedStyles(getStyles);
    const isVisble=props.isVisible;
    return (
        <View style={[styles.cancelTextContainer]}>
            <TouchableOpacity onPress={props.onPress_Cancel}>
                <Text style={[styles.cancelText,
                isVisble ?
                    { color: colors[colorNames.homePage.background] }
                    :
                    { color: colors[colorNames.homePage.deleteButtonBackground] }]}>
                    {loc.t(Texts.cancel).toUpperCase()}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default CancelText;

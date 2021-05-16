import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import BorderedBox from '../../../Components/BorderedBox';
import { useThemedColors, useThemedStyles, colorNames } from '../../Theming';

import getStyles from '../Styles/AuthButtonStyles';

const AuthButton = (props) => {
    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();
    
    return (
        <BorderedBox
            borderColor={colors[colorNames.auth.inputBorder]}
            backgroundColor={colors[colorNames.auth.coloredButtonBackground]}>
            <TouchableOpacity
                style={styles.touchable}
                onPress={props.onPress}
                disabled={props.disabled}>
                <Text style={styles.text}>{props.text.toLocaleUpperCase('tr')}</Text>
            </TouchableOpacity>
        </BorderedBox>
    );
};

export default AuthButton;
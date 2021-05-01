import React from 'react';
import { TextInput, View } from 'react-native';

import BorderedBox from '../../../Components/BorderedBox';
import { useThemedStyles, useThemedColors, colorNames } from '../../Theming';

import getStyles from '../Styles/AuthInputStyles';

const AuthInput = props => {
    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();
    return (
        <BorderedBox borderColor={colors[colorNames.auth.inputBorder]}>
            <View style={styles.inputContainer}>
                <TextInput
                    autoCapitalize={props.autoCapitalize}
                    secureTextEntry={props.secureTextEntry}
                    style={styles.input}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    autoCorrect={false}
                    placeholder={props.placeholder}
                    placeholderTextColor={colors[colorNames.auth.inputPlaceholder]} />
            </View>
        </BorderedBox>
    );
};

export default AuthInput;

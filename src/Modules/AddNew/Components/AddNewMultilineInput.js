import React from 'react';
import { View, TextInput } from 'react-native';

import { Texts, useLocalization } from '../../Localization';
import { colorNames, useThemedColors, useThemedStyles } from '../../Theming';

import getStyles from '../styles/AddNewMultilineInputStyles';
const AddNewMultilineInput = props => {

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const loc = useLocalization();

    return (
        <View style={styles.container}>
            <TextInput
                placeholder={loc.t(Texts.explanation)}
                placeholderTextColor={colors[colorNames.addNew.textInputPlaceHolder]}
                multiline
                numberOfLines={8}
                style={styles.input}
                value={props.value}
                textAlign='left'
                textAlignVertical='top'
            />
        </View>
    );
};

export default AddNewMultilineInput;

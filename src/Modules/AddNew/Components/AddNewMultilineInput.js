import React from 'react';
import { Text, TextInput } from 'react-native';

import { Texts, useLocalization } from '../../Localization';
import { colorNames, useThemedColors, useThemedStyles } from '../../Theming';

import getStyles from '../styles/AddNewMultilineInputStyles';
const AddNewMultilineInput = props => {

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const loc = useLocalization();

    return (
       <TextInput
            placeholder={loc.t(Texts.explanation)}
            placeholderTextColor={colors[colorNames.addNew.textInputPlaceHolder]}
            multiline
            numberOfLines={6}
            style={styles.input}
       />
    );
};

export default AddNewMultilineInput;

/*
<TextInput
    placeHolder={loc.t(Texts.explanation)}
    placeholderTextColor={colors[colorNames.addNew.textInputPlaceHolder]}
    multiline={true}
    numberOfLines={4}
    style={styles.input}

/>
*/
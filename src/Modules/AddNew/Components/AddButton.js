import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { Texts, useLocalization } from '../../Localization';
import { useThemedColors, useThemedStyles } from '../../Theming';

import getStyles from '../styles/AddButtonStyles';

const AddButton = props => {

    const styles = useThemedStyles(getStyles);
   
    const loc = useLocalization();
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.addText}>{props.text.toUpperCase()}</Text>
        </TouchableOpacity>
    );
};

export default AddButton;

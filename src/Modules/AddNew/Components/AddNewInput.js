import React from 'react';
import { TextInput,  View } from 'react-native';

import BorderedBox from '../../../Components/BorderedBox';
import { useThemedColors, useThemedStyles, colorNames} from '../../Theming';

import getStyles from '../styles/AddNewInputStyles';

const AddNewInput = props => {

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    return (
        <BorderedBox borderColor={colors[colorNames.addNew.textInputBorder]}>
            <View style={styles.inputContainer}>
                <TextInput
                    keyboardType={props.keyboardType}
                    style={styles.input}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    placeholder={props.placeHolder}
                    placeholderTextColor={colors[colorNames.addNew.textInputPlaceHolder]}
               />
            </View>
        </BorderedBox>
    );
};

export default AddNewInput;

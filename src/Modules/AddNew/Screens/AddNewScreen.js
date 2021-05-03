import React from 'react';
import { Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Texts, useLocalization } from '../../Localization';
import { colorNames, useThemedColors, useThemedStyles } from '../../Theming';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import BorderedBox from '../../../Components/BorderedBox';

import AddNewInput from '../Components/AddNewInput';
import DateInput from '../Components/DateInput';
import AddButton from '../Components/AddButton';
import AddNewMultilineInput from '../Components/AddNewMultilineInput';

import getStyles from '../styles/AddNewScreenStyle';


const AddNewScreen = props => {

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const loc = useLocalization();

    return (
        <TouchableOpacity style={styles.container} onPress={()=>Keyboard.dismiss()} activeOpacity={1}>
            <View style={styles.inputsContainer}>
                <View style={styles.inputContainer}>
                    <AddNewInput
                        placeHolder={loc.t(Texts.shoppingType)}
                        onChangeText={() => console.log('içerik değişiyoorr')}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <DateInput/>
                </View>
                <View style={styles.inputContainer}>
                    <AddNewInput
                        placeHolder={loc.t(Texts.price)}
                        keyboardType={'numeric'}
                        onChangeText={() => console.log('içerik değişiyoorr')}
                    />
                </View>
                <View style={styles.inputContainer}>                    
                    <AddNewMultilineInput/>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <AddButton/>
            </View>
        </TouchableOpacity>
    );
};

export default AddNewScreen;

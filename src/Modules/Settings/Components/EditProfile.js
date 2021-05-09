import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useThemedColors, useThemedStyles, colorNames } from '../../Theming';
import { useLocalization, Texts } from '../../Localization';
import getStyles from '../styles/EditProfileStyles';

const EditProfile = props => {

    const [expenseLimit, setExpenseLimit] = useState(false);

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const loc = useLocalization();

    return (
        <View style={styles.container}>
            <View style={styles.emailContainer}>
                <Text style={styles.emailText}>beyzanur5@mail.com</Text>
            </View>
            <View>
                <View style={styles.textInputContainer}>
                    <Text style={styles.inputText} numberOfLines={1}>{loc.t(Texts.username)}</Text>
                    <TextInput
                        placeholder={loc.t(Texts.username)}
                        style={styles.textInput}
                        placeholderTextColor={colors[colorNames.editProfile.placeHolder]}
                    />
                </View>
                <View style={styles.textInputContainer}>
                    <Text style={styles.inputText}>{loc.t(Texts.monthlyIncome)}</Text>
                    <TextInput
                        placeholder={loc.t(Texts.monthlyIncome)}
                        style={styles.textInput}
                        placeholderTextColor={colors[colorNames.editProfile.placeHolder]}
                        keyboardType={'numeric'}
                    />
                </View>
                <Text style={styles.text}>{loc.t(Texts.monthlyExpenseQuestion)}</Text>
                <View style={[styles.textInputContainer, { justifyContent: 'space-around' }]}>
                    <TouchableOpacity style={styles.optionTouch} onPress={()=>setExpenseLimit(true)}>
                        <Text style={styles.inputText}>{loc.t(Texts.yes)}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionTouch} onPress={()=>setExpenseLimit(false)}>
                        <Text style={styles.inputText}>{loc.t(Texts.no)}</Text>
                    </TouchableOpacity>
                </View>

                {
                    expenseLimit ?
                        <View style={styles.expenseContainer} >
                            <Text style={styles.text}>
                                {loc.t(Texts.monthlyExpense)}
                        </Text>
                            <TextInput
                                placeholder={loc.t(Texts.pleaseEnter)}
                                placeholderTextColor={colors[colorNames.editProfile.placeHolder]}
                                style={styles.expenseTextInput}
                                keyboardType={'numeric'}
                            />
                        </View>
                        :
                        null
                }
                <View style={styles.buttonContainer}>
                    <TouchableOpacity >
                        <Text style={styles.emailText}>{loc.t(Texts.okey)}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
};

export default EditProfile;

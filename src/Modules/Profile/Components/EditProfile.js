import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useThemedColors, useThemedStyles, colorNames } from '../../Theming';
import { useLocalization, Texts } from '../../Localization';
import getStyles from '../styles/EditProfileStyles';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../Auth';
import { updateUser } from '../../Auth/API/Firebase';
import { setIsLoadingAC } from '../../Loading/LoadingRedux';
import { createProfile, getProfileSubscribe } from '../API/Firebase';
import { totalSelector } from '../../Homepage/Redux/TotalRedux';
import { setWarningCodeAC } from '../../Warning/WarningRedux';

const EditProfile = props => {
    const user = useSelector(userSelector);
    const totalRedux = useSelector(totalSelector);

    const [expenseLimit, setExpenseLimit] = useState(false);
    const [income, setIncome] = useState('');
    const [expense, setExpense] = useState('');

    const [profile, setProfile] = useState(null);

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const loc = useLocalization();

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const _onChange_Income = (text) => {
        setIncome(text);
    }

    const _onChange_Expense = (text) => {
        setExpense(text);
    }

    useEffect(() => {
        const off = getProfileSubscribe((data) => {
            setProfile(data)
        });
        return () => {
            off()
        }
    }, []);

    const _onPress_OK = () => {
        /**Burada kontrol yapıldı ancak localize edilecek ve ekran oluşturulacak(warning) */
        const onComplete = () => {
            dispatch(setIsLoadingAC(false));
            navigation.goBack();
            // if(expense!==0 && totalRedux>expense){
            //     dispatch(setWarningCodeAC('Limiti aştınız !!'+(parseFloat(totalRedux)-parseFloat(expense)).toString()))
            // }
        }
        console.log(income.length);
        if (income.length === 0) {
            console.log(income.length);
            //alert('Aylık  gelirinizi yazmayı unuttunuz !!')
            dispatch(setWarningCodeAC(loc.t(Texts.incomeForgetten)))
        }
        else if (expense > income && expense > 0) {
            dispatch(setWarningCodeAC(loc.t(Texts.highSpendingLimit)));
        }
        else {
            dispatch(setIsLoadingAC(true));
            const email = user.email;
            const profile = {
                income,
                expense,
                total: totalRedux,
            }
            createProfile(profile, onComplete)
            props.isVisibleMode();
        }
    }
    const onPressSetExpense = () => {
        if (profile === null) {
            setExpenseLimit(false);
            setExpense(0)
        }
        else {
            setExpenseLimit(false);
            setExpense(profile.expense)
        }
    }
    const onPressSetExpenseYes = () => {
        setExpenseLimit(true);
        setExpense(profile.expense)
    }
    return (
        <View style={styles.container}>
            <View style={styles.emailContainer}>
                <Text style={styles.emailText}>{user.displayName}</Text>
            </View>
            <View>
                <View style={styles.textInputContainer}>
                    <Text style={styles.inputText}>{loc.t(Texts.monthlyIncome)}</Text>
                    <TextInput
                        placeholder={loc.t(Texts.monthlyIncome)}
                        style={styles.textInput}
                        placeholderTextColor={colors[colorNames.editProfile.placeHolder]}
                        keyboardType={'numeric'}
                        onChangeText={_onChange_Income}
                        defaultValue={profile !== null ? profile.income : null}
                    />
                </View>
                <Text style={styles.text}>{loc.t(Texts.monthlyExpenseQuestion)}</Text>
                <View style={[styles.textInputContainer, { justifyContent: 'space-around' }]}>
                    <TouchableOpacity style={styles.optionTouch} onPress={onPressSetExpenseYes}>
                        <Text style={styles.inputText}>{loc.t(Texts.yes)}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionTouch} onPress={onPressSetExpense}>
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
                                onChangeText={_onChange_Expense}
                            />
                        </View>
                        :
                        null
                }
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={_onPress_OK}>
                        <Text style={styles.emailText}>{loc.t(Texts.okay)}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
};

export default EditProfile;

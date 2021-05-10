import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useThemedColors, useThemedStyles, colorNames } from '../../Theming';
import { useLocalization, Texts } from '../../Localization';
import getStyles from '../styles/EditProfileStyles';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from '../../Auth';
import { updateUser } from '../../Auth/API/Firebase';
import { setIsLoadingAC } from '../../Loading/LoadingRedux';
import { createProfile } from '../API/Firebase';

const EditProfile = props => {
    const user =useSelector(userSelector);

    const [expenseLimit, setExpenseLimit] = useState(false);
    const [income,setIncome]=useState(0);
    const [expense,setExpense]=useState(0);

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const loc = useLocalization();
    
    const navigation = useNavigation();
    const dispatch=useDispatch();

    const _onChange_Income=(text)=>{
        setIncome(text);
    }

    const _onChange_Expense=(text)=>{
        setExpense(text);
    }

    const _onPress_OK=()=>{
        
        const onComplete=()=>{
            dispatch(setIsLoadingAC(false));
            navigation.goBack();
        }

        if(income.length === 0){
            alert('Aylık  gelirinizi yazmayı unuttunuz !!')
        }
        else if(expense > income && expense > 0){
            alert('Giderleriniz gelirinizden fazla !!')
        }
        else {
            dispatch(setIsLoadingAC(true));
            const email=user.email;
            const profile={
                income,
                expense,
                total:0,
            }
            createProfile(profile,onComplete)            
            props.isVisibleMode();
        }
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
                    />
                </View>
                <Text style={styles.text}>{loc.t(Texts.monthlyExpenseQuestion)}</Text>
                <View style={[styles.textInputContainer, { justifyContent: 'space-around' }]}>
                    <TouchableOpacity style={styles.optionTouch} onPress={()=>setExpenseLimit(true)}>
                        <Text style={styles.inputText}>{loc.t(Texts.yes)}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionTouch} onPress={()=>{setExpenseLimit(false);setExpense(0)}}>
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

import { useNavigation } from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import { Keyboard, Text, TextInput, TouchableOpacity, View, Button, Platform, ScrollView } from 'react-native';

import { Texts, useLocalization, useLocaleDateFormat } from '../../Localization';
import { colorNames, useThemedColors, useThemedStyles } from '../../Theming';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import BorderedBox from '../../../Components/BorderedBox';

import AddNewInput from '../Components/AddNewInput';
import DateInput from '../Components/DateInput';
import AddButton from '../Components/AddButton';
import AddNewMultilineInput from '../Components/AddNewMultilineInput';
import CancelText from '../../../Components/CancelText';

import getStyles from '../styles/AddNewScreenStyle';
import { ErrorManager } from '../../Error';
import DummyShoppingList from '../../Homepage/DummyShoppingList';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../API/Firebase';
import { setIsLoadingAC } from '../../Loading/LoadingRedux';


const AddNewScreen = props => {

    const[shoppingType,setShoppingType]=useState('');
    const[momentDate,setMomentDate]=useState('');
    const[totalPrice,setTotalPrice]=useState('');
    const[detail,setDetail]=useState('');

    const navigation = useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            title:header,
        })
    },[]);

    const { id, title, price, date, explanation }=props.route.params;

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const loc = useLocalization();

    const dateFormat = useLocaleDateFormat();

    let header=loc.t(Texts.addNew);
    if(id!==undefined){
        header=loc.t(Texts.edit);
    }
    
    const dispatch =useDispatch();
    const _onPress_Cancel =()=>{
        console.log('düzenleme modunda iptal işlemi yapılacak')
    }
    const onPress_add=()=>{

        dispatch(setIsLoadingAC(true));
        const shoppingItem={
            title:shoppingType,
            date,
            price:totalPrice,
            detail,
        }

        const onComplete=()=>{
            dispatch(setIsLoadingAC(false));
            navigation.goBack();
        }

        console.log('eklendi \n -->',shoppingItem);

        addItem(shoppingItem,onComplete);
        
    }
    const onPress_Ok=()=>{
        console.log('ok')
    }
    //setMomentDate(text);setDateString(text.format(dateFormat));setDay(text.toDate().toDateString().split(' ')[0])
    //;setDateString(text.format(dateFormat));setDay(text.toDate().toDateString().split(' ')[0])}
    return (
        <ScrollView style={styles.scrollView}>
            <TouchableOpacity style={styles.container} onPress={() => Keyboard.dismiss()} activeOpacity={1}>
                {
                    id!==undefined ?
                    <CancelText isVisible={false} onPress_Cancel={_onPress_Cancel}/>
                    :
                    null
                }
                <View style={styles.inputsContainer}>
                    <View style={styles.inputContainer}>
                        <AddNewInput
                            value={title}
                            placeHolder={loc.t(Texts.shoppingType)}
                            onChangeText={(text) => setShoppingType(text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <DateInput 
                            value={date} 
                            onChange_date={(text)=>{setMomentDate(text)}}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <AddNewInput
                            value={price}
                            placeHolder={loc.t(Texts.price)}
                            keyboardType={'numeric'}
                            onChangeText={(text) => {setTotalPrice(text + 'TL')}}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <AddNewMultilineInput value={explanation} onChange_detail={(text)=>{setDetail(text)}}/>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <AddButton 
                        text={id===undefined ? loc.t(Texts.add) : loc.t(Texts.okey)} 
                        onPress_button={id===undefined ? onPress_add : onPress_Ok}
                    />
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default AddNewScreen;

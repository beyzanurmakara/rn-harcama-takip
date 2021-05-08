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
import { addItem, getItemDetail, updateItem } from '../../../API/Firebase';
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

    useEffect(()=>{
        if(key){
            getItemDetail(key, item=>{
                setShoppingType(item.title);
                setMomentDate(item.date);
                setTotalPrice(item.price);
                setDetail(item.detail);
            });
        }
    },[])

    const { key, title, price, date, explanation }=props.route.params;
    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const loc = useLocalization();

    const dateFormat = useLocaleDateFormat();

    let header=loc.t(Texts.addNew);
    if(key!==undefined){
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
            momentDate,
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
    const onPress_Ok = () => {
        //console.log(key)
        if (key) {
            dispatch(setIsLoadingAC(true));
            const shoppingItem = {
                key:key,
                title: shoppingType,
                momentDate,
                price: totalPrice,
                detail,
            }

            const onComplete = () => {
                dispatch(setIsLoadingAC(false));
                navigation.goBack();
            }

            console.log('düzenlendi \n -->', shoppingItem);
            updateItem(shoppingItem,onComplete);
        }
    }
    
    return (
        <ScrollView style={styles.scrollView}>
            <TouchableOpacity style={styles.container} onPress={() => Keyboard.dismiss()} activeOpacity={1}>
                {
                    key!==undefined ?
                    <CancelText isVisible={false} onPress_Cancel={_onPress_Cancel}/>
                    :
                    null
                }
                <View style={styles.inputsContainer}>
                    <View style={styles.inputContainer}>
                        <AddNewInput
                            value={shoppingType}
                            placeHolder={loc.t(Texts.shoppingType)}
                            onChangeText={(text) => setShoppingType(text)}                 />
                    </View>
                    <View style={styles.inputContainer}>
                        <DateInput 
                            value={date} //date
                            onChange_date={(text)=>{setMomentDate(text)}}/>
                    </View>
                    <View style={styles.inputContainer}>
                        <AddNewInput
                            value={totalPrice}
                            placeHolder={loc.t(Texts.price)}
                            keyboardType={'numeric'}
                            onChangeText={(text) => {setTotalPrice(text);console.log(text)}}           />
                    </View>
                    <View style={styles.inputContainer}>
                        <AddNewMultilineInput value={detail} onChange_detail={(text)=>{setDetail(text)}}/>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <AddButton 
                        text={key===undefined ? loc.t(Texts.add) : loc.t(Texts.okey)} 
                        onPress_button={key===undefined ? onPress_add : onPress_Ok}
                    />
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default AddNewScreen;

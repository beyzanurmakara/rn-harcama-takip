import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Keyboard, TouchableOpacity, View, ScrollView } from 'react-native';

import { Texts, useLocalization, useLocaleDateFormat, categories } from '../../Localization';
import { useThemedColors, useThemedStyles } from '../../Theming';

import AddNewInput from '../Components/AddNewInput';
import DateInput from '../Components/DateInput';
import AddButton from '../Components/AddButton';
import AddNewMultilineInput from '../Components/AddNewMultilineInput';
import CancelText from '../../../Components/CancelText';

import getStyles from '../styles/AddNewScreenStyle';
import { useDispatch } from 'react-redux';
import { addItem, getItemDetail, updateItem } from '../../../API/Firebase';
import { setIsLoadingAC } from '../../Loading/LoadingRedux';
import Category from '../Components/Category';
import { setErrorCodeAC } from '../../Error/ErrorRedux';
import { getProfile, updateProfile } from '../../Profile/API/Firebase';
import { getCurrentUser } from '../../Auth';


const AddNewScreen = props => {

    const [shoppingType, setShoppingType] = useState('');
    const [momentDate, setMomentDate] = useState('');
    const [totalPrice, setTotalPrice] = useState('');
    const [detail, setDetail] = useState('');
    const [profile, setProfile] = useState(null);

    const navigation = useNavigation();

    const { key, title, price, date, explanation } = props.route.params;
    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const loc = useLocalization();

    const dateFormat = useLocaleDateFormat();



    const dispatch = useDispatch();

    let header = loc.t(Texts.addNew);
    if (key !== undefined) {
        header = loc.t(Texts.edit);
    }

    useEffect(() => {
        navigation.setOptions({
            title: header,
        })
    }, []);

    useEffect(() => {
        if (key) {
            getItemDetail(key, item => {
                setShoppingType(item.title);
                setMomentDate(item.date);
                setTotalPrice(item.price);
                setDetail(item.detail);
            });
        }
    }, [])

    useEffect(() => {
        const userId = getCurrentUser().uid;
        getProfile(userId, prof => {
            setProfile(prof);
        });
    }, [])

    const _onPress_Cancel = () => {
        getItemDetail(key, item => {
            setShoppingType(item.title);
            setMomentDate(item.date);
            setTotalPrice(item.price);
            setDetail(item.detail);
        });

    }
    const onPress_add = () => {
        const onComplete = () => {
            navigation.navigate('homepage-screen');
            dispatch(setIsLoadingAC(false));
        }
        if (shoppingType.length !== 0
            && momentDate.length !== 0
            && totalPrice.length !== 0
            && detail.length !== 0) {

            if (profile !== null) {
                dispatch(setIsLoadingAC(true));
                const shoppingItem = {
                    title: shoppingType,
                    date: momentDate,
                    price: totalPrice,
                    detail,
                }

                addItem(shoppingItem, onComplete);
                updateProfile(profile);
            }
            else {
                dispatch(setIsLoadingAC(true));
                const shoppingItem = {
                    title: shoppingType,
                    date: momentDate,
                    price: totalPrice,
                    detail,
                }
                addItem(shoppingItem, onComplete);
            }
        }
        else {
            dispatch(setErrorCodeAC('emptySpace'))
        }

    }
    const onPress_Ok = () => {

        if (shoppingType.length !== 0
            && momentDate.length !== 0
            && totalPrice.length !== 0
            && detail.length !== 0) {
            if (key) {
                dispatch(setIsLoadingAC(true));
                const shoppingItem = {
                    key: key,
                    title: shoppingType,
                    date: momentDate,
                    price: totalPrice,
                    detail,
                }

                const onComplete = () => {
                    dispatch(setIsLoadingAC(false));
                    navigation.goBack();
                }

                updateItem(shoppingItem, onComplete);
            }
        }
        else {
            dispatch(setErrorCodeAC('emptySpace'))
        }

    }

    const _getCategory = (item) => {
        setShoppingType(loc.t(categories[item.name]))
    }

    return (
        <ScrollView style={styles.scrollView}>
            <TouchableOpacity style={styles.container} onPress={() => Keyboard.dismiss()} activeOpacity={1}>
                {
                    key !== undefined ?
                        <CancelText isVisible={false} onPress_Cancel={_onPress_Cancel} />
                        :
                        null
                }
                <Category onPress_item={_getCategory} />
                <View style={styles.inputsContainer}>
                    <View style={styles.inputContainer}>
                        <AddNewInput
                            value={shoppingType}
                            placeHolder={loc.t(Texts.shoppingType)}
                            onChangeText={(text) => setShoppingType(text)}
                            editable={false} />
                    </View>
                    <View style={styles.inputContainer}>
                        <DateInput
                            value={date} //date
                            onChange_date={(text) => { setMomentDate(text) }} />
                    </View>
                    <View style={styles.inputContainer}>
                        <AddNewInput
                            value={totalPrice}
                            placeHolder={loc.t(Texts.price)}
                            editable={true}
                            keyboardType={'numeric'}
                            onChangeText={(text) => { setTotalPrice(text) }} />
                    </View>
                    <View style={styles.inputContainer}>
                        <AddNewMultilineInput value={detail} onChange_detail={(text) => { setDetail(text) }} />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <AddButton
                        text={key === undefined ? loc.t(Texts.add) : loc.t(Texts.okay)}
                        onPress_button={key === undefined ? onPress_add : onPress_Ok}
                    />
                </View>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default AddNewScreen;

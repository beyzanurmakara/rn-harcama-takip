import { useNavigation } from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import { Keyboard, Text, TextInput, TouchableOpacity, View, Button, Platform, ScrollView } from 'react-native';

import { Texts, useLocalization } from '../../Localization';
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


const AddNewScreen = props => {

    const navigation = useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            title:header,
        })
    },[]);

    const { id, title, price, date, explanation }=props.route.params;

    console.log(date);
    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const loc = useLocalization();

    let header=loc.t(Texts.addNew);
    if(id!==undefined){
        header=loc.t(Texts.edit);
    }
    
    const _onPress_Cancel =()=>{
        console.log('düzenleme modunda iptal işlemi yapılacak')
    }

    return (
        // <ScrollView style={styles.scrollView}>
        //     <TouchableOpacity style={styles.container} onPress={() => Keyboard.dismiss()} activeOpacity={1}>
        //         {
        //             id!==undefined ?
        //             <CancelText isVisible={false} onPress_Cancel={_onPress_Cancel}/>
        //             :
        //             null
        //         }
        //         <View style={styles.inputsContainer}>
        //             <View style={styles.inputContainer}>
        //                 <AddNewInput
        //                     value={title}
        //                     placeHolder={loc.t(Texts.shoppingType)}
        //                     onChangeText={() => console.log('içerik değişiyoorr')}
        //                 />
        //             </View>
        //             <View style={styles.inputContainer}>
        //                 <DateInput value={date}/>
        //             </View>
        //             <View style={styles.inputContainer}>
        //                 <AddNewInput
        //                     value={price}
        //                     placeHolder={loc.t(Texts.price)}
        //                     keyboardType={'numeric'}
        //                     onChangeText={() => console.log('içerik değişiyoorr')}
        //                 />
        //             </View>
        //             <View style={styles.inputContainer}>
        //                 <AddNewMultilineInput value={explanation}/>
        //             </View>
        //         </View>
        //         <View style={styles.buttonContainer}>
        //             <AddButton text={id===undefined ? loc.t(Texts.add) : loc.t(Texts.okey)}/>
        //         </View>
        //     </TouchableOpacity>
        // </ScrollView>
        <ErrorManager/>
    );
};

export default AddNewScreen;

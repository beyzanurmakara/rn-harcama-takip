import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';

import { errorCodeSelector, setErrorCodeAC } from './ErrorRedux';
import Icon from '../../Components/Icon';

import getStyles from './styles/ErrorManagerStyles';
import { colorNames, useThemedColors, useThemedStyles } from '../Theming';
import { Svgs } from '../../StylingConstants';
import { errorList, Texts, useLocalization } from '../Localization';

const ErrorManager = props => {

    const errorCode =  useSelector(errorCodeSelector);
    const [errorState,setErrorState]=useState(errorCode);
    let isvisible = errorCode.length !==0;
    
    const  dispatch =useDispatch();

    useEffect(()=>{
        setErrorState(errorCode);
        //console.log(errorCode);
    },[errorCode])

    const  styles = useThemedStyles(getStyles);
    const loc =useLocalization();
    const colors=useThemedColors();

    const _onPress_OK=()=>{
        isVisible=false;
        dispatch(setErrorCodeAC(''));
        setErrorState('');
    }
    console.log(errorState);
    console.log(loc.t(errorList.error[errorState]));
    return (
        <Modal  isVisible={isvisible} backdropColor={colors[colorNames.error.modalBackdropColor]} style={styles.modal}>
            <View  style={styles.errorTexContainer}>
                <Text style={styles.errorText}>{loc.t(Texts.error).toUpperCase()}</Text>
            </View>
            <View style={styles.container}>
                    <TextInput 
                        numberOfLines={4} 
                        multiline 
                        value={loc.t(errorList.error[errorState])} 
                        editable={false}
                        style={styles.messageText}/>
                    <TouchableOpacity style={styles.buttonContainer} onPress={_onPress_OK}>
                        <Icon svg={Svgs.Okay} iconStyle={{color:colors[colorNames.error.iconColor]}}/>
                    </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default ErrorManager;

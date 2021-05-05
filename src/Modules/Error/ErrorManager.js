import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';

import { errorMessageSelector, isErrorSelector, setErrorMessageAC, setIsErrorAC } from './ErrorRedux';
import Icon from '../../Components/Icon';

import getStyles from './styles/ErrorManagerStyles';
import { colorNames, useThemedColors, useThemedStyles } from '../Theming';
import { Svgs } from '../../StylingConstants';
import { Texts, useLocalization } from '../Localization';

const ErrorManager = props => {

    const isError = useSelector(isErrorSelector);
    const errorMessage =  useSelector(errorMessageSelector);
    const  dispatch =useDispatch();

    const  styles = useThemedStyles(getStyles);
    const loc =useLocalization();
    const colors=useThemedColors();

    const _onPress_OK=()=>{
        dispatch(setIsErrorAC(false));
        dispatch(setErrorMessageAC(''));
    }
    return (
        <Modal  isVisible={isError} backdropColor={colors[colorNames.error.modalBackdropColor]} style={styles.modal}>
            <View  style={styles.errorTexContainer}>
                <Text style={styles.errorText}>{loc.t(Texts.error).toUpperCase()}</Text>
            </View>
            <View style={styles.container}>
                    <TextInput 
                        numberOfLines={4} 
                        multiline value={errorMessage} 
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

import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import Modal from 'react-native-modal';

import { errorMessageSelector, isErrorSelector } from './ErrorRedux';
import Icon from '../../Components/Icon';

import getStyles from './styles/ErrorManagerStyles';
import { useThemedStyles } from '../Theming';
import { Svgs } from '../../StylingConstants';

const ErrorManager = props => {

    const isError = useSelector(isErrorSelector);
    const errorMessage =  useSelector(errorMessageSelector);
    
    const  styles = useThemedStyles(getStyles);

    return (
        <Modal  isVisible={true} backdropColor='transparent' style={styles.modal}>
            <View  style={styles.errorTexContainer}>
                <Text style={styles.errorText}>HATA</Text>
            </View>
            <View style={styles.container}>
                    <TextInput 
                        numberOfLines={4} 
                        multiline value={'dfsjhsdfsjhsfdkhdfjfhsdkhkjshfdfjfhsdkhkjshfdfjfhsdkhkjshfdfjfhsdkhkjshfdffdkhdfjfhsdkhkjshfdfjfhsdkhkjshfdfjfhsdkhkjshfdfjfhsdkhkjshfdfjfhsdkhkjshfdfj'} 
                        editable={false}
                        style={styles.messageText}/>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Icon svg={Svgs.Okay} iconStyle={{color:'red'}}/>
                    </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default ErrorManager;

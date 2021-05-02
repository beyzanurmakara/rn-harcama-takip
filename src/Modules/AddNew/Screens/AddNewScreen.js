import React from 'react';
import { Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Texts, useLocale, useLocalization } from '../../Localization';
import { colorNames, useThemedColors, useThemedStyles } from '../../Theming';
import AddNewInput from '../Components/AddNewInput';
import Icon from '../../../Components/Icon';

import getStyles from '../styles/AddNewScreenStyle';
import { Svgs } from '../../../StylingConstants';
import BorderedBox from '../../../Components/BorderedBox';

const AddNewScreen = props => {

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const loc = useLocalization();

    return (
        <TouchableOpacity style={styles.container} onPress={()=>Keyboard.dismiss()} activeOpacity={1}>
            <View style={styles.inputsContainer}>
                <View style={styles.inputContainer}>
                    <AddNewInput
                        placeHolder={loc.t(Texts.shoppingType)}
                        onChangeText={() => console.log('içerik değişiyoorr')}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.dateContainer}>
                        <View style={styles.dateTextContainer}>
                            <Text style={styles.dateText}>{loc.t(Texts.date)}</Text>
                        </View>
                        <TouchableOpacity style={styles.iconContainer}>
                                <Icon svg={Svgs.CalendarIcon} iconStyle={{color:colors[colorNames.addNew.calendarIcon]}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.todayTextContainer}>
                            <Text style={styles.todayText}>{loc.t(Texts.today)}</Text>  
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <AddNewInput
                        placeHolder={loc.t(Texts.price)}
                        keyboardType={'numeric'}
                        onChangeText={() => console.log('içerik değişiyoorr')}
                    />
                </View>
                <View style={styles.inputContainer}>                    
                    <AddNewInput
                        placeHolder={loc.t(Texts.explanation)}
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={() => console.log('içerik değişiyoorr')}
                    />
                </View>
            </View>

           
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <TouchableOpacity>
                        <Text style={styles.addText}>{loc.t(Texts.add).toUpperCase()}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default AddNewScreen;

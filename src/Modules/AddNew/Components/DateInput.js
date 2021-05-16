import React, {useEffect, useState} from 'react';
import { TouchableOpacity,  View, Text, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

import Icon from '../../../Components/Icon';
import { Fonts, Svgs } from '../../../StylingConstants';
import { Texts, useLocaleDateFormat, useLocalization, useLocale } from '../../Localization';
import { colorNames, useThemedColors, useThemedStyles } from '../../Theming';

import getStyles from '../styles/DateInputStyles';


const DateInput = props => {

    const [momentDate, setMomentDate] = useState('');
    const [ dateString,setDateString ] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [changeColor, setChangeColor] = useState(false);

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const loc = useLocalization();
    const dateFormat = useLocaleDateFormat();
    const dateStandart='YYYY-MM-DD hh:mm:ss';
    const currentLocale=useLocale();

    useEffect(()=>{
        if(props.value){
            setMomentDate(moment(props.value).format(dateStandart));
            setDateString(moment(props.value).format(dateFormat))
        }
    },[props.value])

    useEffect(()=>{
        props.onChange_date(momentDate);
    },[momentDate])

    const _onPressCalenderIcon = () => {
        setIsVisible(!isVisible);
        setChangeColor(!changeColor);
    }

    const _onPressDay=(day)=>{
        setDateString(moment(day.dateString).format(dateFormat));
        const momentDay=moment(day.dateString).format(dateStandart);
        setMomentDate(momentDay);
        setIsVisible(false);        
    }
    
    const getToday=()=>{
        const todayMoment=moment();
        setDateString(moment(todayMoment).format(dateFormat));
        const standardMomentDate=moment(todayMoment).format(dateStandart);
        setMomentDate(standardMomentDate);
        setIsVisible(false);        
    }

    return (
        <>
            <View style={styles.dateContainer}>
                <View style={[styles.dateTextContainer,{justifyContent:'center'}]}>
                    <TextInput 
                        style={styles.dateText}
                        placeholder={ loc.t(Texts.date)}
                        placeholderTextColor={colors[colorNames.addNew.textInputPlaceHolder]}
                        value={dateString} 
                        editable={false}/>
                </View>
                <TouchableOpacity style={styles.iconContainer} onPress={_onPressCalenderIcon}>
                    <Icon 
                        svg={Svgs.CalendarIcon} 
                        iconStyle={{ 
                            color: changeColor ? 
                                    colors[colorNames.addNew.addButtonBackground]
                                    :
                                    colors[colorNames.addNew.calendarIcon] }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.todayTextContainer} onPress={getToday}>
                    <Text style={styles.todayText}>{loc.t(Texts.today)}</Text>
                </TouchableOpacity>
            </View>
            {
                isVisible &&
                <View  style={styles.calendarContainer}>
                    <Calendar
                        onDayPress={(day)=>_onPressDay(day)}
                        firstDay={1}
                        theme={{
                            arrowColor: colors[colorNames.addNew.addButtonBackground],
                            'stylesheet.calendar.header': {
                                week: {
                                    marginTop: 5,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }
                            },
                            dayTextColor:colors[colorNames.addNew.calendarDayTextColor],
                            calendarBackground:colors[colorNames.addNew.calendarBackgroundColor],
                            monthTextColor:colors[colorNames.addNew.addButtonBackground],
                            selectedDayBackgroundColor:colors[colorNames.addNew.addButtonBackground],
                            selectedDayTextColor:colors[colorNames.addNew.addButtonBackground],
                            textDayFontFamily:Fonts.type.regular,
                            textDayFontSize:Fonts.size(14),
                            textDisabledColor:colors[colorNames.addNew.calendarDayDisabledTextColor],
                            textMonthFontFamily:Fonts.type.regular,
                            textMonthFontSize:Fonts.size(14),
                            textDayHeaderFontFamily:Fonts.type.regular,
                            textDayHeaderFontSize:Fonts.size(14),
                            todayTextColor:colors[colorNames.addNew.addButtonBackground]

                        }}
                        style={styles.calendarView}
                    />
                </View>
            }
        </>
    );
};

export default DateInput;

import React, {useEffect, useState} from 'react';
import { TouchableOpacity,  View, Text, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

import Icon from '../../../Components/Icon';
import { Fonts, Svgs } from '../../../StylingConstants';
import { Texts, useLocaleDateFormat, useLocalization } from '../../Localization';
import { colorNames, useThemedColors, useThemedStyles } from '../../Theming';

import getStyles from '../styles/DateInputStyles';

const DateInput = props => {

    const [momentDate, setMomentDate] = useState(moment());
    const [isVisible, setIsVisible] = useState(false);
    const [changeColor, setChangeColor] = useState(false);

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const loc = useLocalization();
    const dateFormat = useLocaleDateFormat();
    const dateStandart='YYYY-MM-DD hh:mm:ss';

    useEffect(()=>{
        if(props.value !== undefined){
            let new_date=moment(props.value);
            setMomentDate(new_date);
            props.onChange_date(momentDate);
            //console.log(typeof moment(props.value, dateStandart)); //return object
        }
        //console.log(moment().toDate().toDateString()); //string => Fri May 07 2021
        //console.log(moment().format(dateFormat)); // string => 07.05.2021
    },[])

    const _onPressCalenderIcon = () => {
        setIsVisible(!isVisible);
        setChangeColor(!changeColor);
        
        //console.log(momentDate.toDate().toDateString().split(' ')[0]); //return fri, wed vs.
    }

    const _onPressDay=(day)=>{
        const momentDay=moment(day.dateString);
        setMomentDate(momentDay);
        setIsVisible(false);
        props.onChange_date(momentDate);
    }
    
    const getToday=()=>{
        setMomentDate(moment());
        setIsVisible(false);
        props.onChange_date(momentDate)
    }
    return (
        <>
            <View style={styles.dateContainer}>
                <View style={[styles.dateTextContainer,{justifyContent:'center'}]}>
                    <TextInput 
                        style={styles.dateText}
                        placeholder={ loc.t(Texts.date)}
                        placeholderTextColor={colors[colorNames.addNew.textInputPlaceHolder]}
                        value={momentDate.format(dateFormat)} 
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
                        onMonthChange={(month) => { console.log('month changed', month) }}
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

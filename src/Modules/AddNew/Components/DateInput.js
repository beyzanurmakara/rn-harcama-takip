import React, {useEffect, useState} from 'react';
import { TouchableOpacity,  View, Text, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

import Icon from '../../../Components/Icon';
import { Fonts, Svgs } from '../../../StylingConstants';
import { Texts, useLocalization } from '../../Localization';
import { colorNames, useThemedColors, useThemedStyles } from '../../Theming';

import getStyles from '../styles/DateInputStyles';

const DateInput = props => {

    const [date, setDate] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [changeColor, setChangeColor] = useState(false);

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const loc = useLocalization();

    useEffect(()=>{
        if(props.value !== undefined){
            setDate(props.value)
        }
    },[])

    const _onPressCalenderIcon = () => {
        setIsVisible(!isVisible);
        setChangeColor(!changeColor);
    }

    return (
        <>
            <View style={styles.dateContainer}>
                <View style={[styles.dateTextContainer,{justifyContent:'center'}]}>
                    <TextInput 
                        style={styles.dateText}
                        placeholder={ loc.t(Texts.date)}
                        placeholderTextColor={colors[colorNames.addNew.textInputPlaceHolder]}
                        //secureTextEntry={true}
                        value={date} //props.value !== undefined ?props.date : 
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
                <TouchableOpacity style={styles.todayTextContainer} onPress={()=>setDate(moment().format('YYYY-MM-DD'))}>
                    <Text style={styles.todayText}>{loc.t(Texts.today)}</Text>
                </TouchableOpacity>
            </View>
            {
                isVisible &&
                <View  style={styles.calendarContainer}>
                    <Calendar
                        // Initially visible month. Default = Date()
                        current={'2021-04-05'}
                        // Handler which gets executed on day press. Default = undefined
                        onDayPress={(day) => { setDate(day.dateString) }}
                        // Handler which gets executed on day long press. Default = undefined
                        onDayLongPress={(day) => { console.log('selected day', day) }}
                        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                        //monthFormat={'yyyy MM'}
                        // Handler which gets executed when visible month changes in calendar. Default = undefined
                        onMonthChange={(month) => { console.log('month changed', month) }}
                        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                        firstDay={1}
                        // Show week numbers to the left. Default = false
                        //showWeekNumbers={true}
                        // Collection of dates that have to be marked. Default = {}
                        markedDates={{
                            '2021-05-16': { selected: true, marked: true, selectedColor: 'blue' },
                            '2021-05-17': { marked: true },
                            '2021-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
                            '2021-05-19': { disabled: true, disableTouchEvent: true }
                        }}
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
                            textDayHeaderFontSize:Fonts.size(14)

                        }}
                        style={styles.calendarView}
                    />
                </View>
            }
        </>
    );
};

export default DateInput;

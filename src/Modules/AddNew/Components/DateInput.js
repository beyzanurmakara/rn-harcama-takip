import React from 'react';
import { TouchableOpacity,  View, Text } from 'react-native';

import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import { Texts, useLocalization } from '../../Localization';
import { colorNames, useThemedColors, useThemedStyles } from '../../Theming';

import getStyles from '../styles/DateInputStyles';

const DateInput = props => {

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const loc = useLocalization();

    return (
        <View style={styles.dateContainer}>
            <View style={styles.dateTextContainer}>
                <Text style={styles.dateText}>{loc.t(Texts.date)}</Text>
            </View>
            <TouchableOpacity style={styles.iconContainer}>
                <Icon svg={Svgs.CalendarIcon} iconStyle={{ color: colors[colorNames.addNew.calendarIcon] }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.todayTextContainer}>
                <Text style={styles.todayText}>{loc.t(Texts.today)}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DateInput;

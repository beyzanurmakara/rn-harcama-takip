import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import { colorNames, useThemedColors, useThemedStyles } from '../../Theming';

import getStyles from '../styles/OptionMenuStyles';

const OptionMenu = props => {

    const colors = useThemedColors();
    const styles =  useThemedStyles(getStyles);
    const selectedOptionKey = props.selectedOptionKey;
    //console.log(selectedOptionKey);
    const renderOptions = () => {
        return props.options.map((option, index) => {

            const isChecked = option.key === props.selectedOptionKey;
            const svg = isChecked ? Svgs.RadioButtonSelected : Svgs.RadioButtonUnselected;
            const iconStyle = {
                color: isChecked ? colors[colorNames.settings.radioButtonSelectedIcon]
                        : colors[colorNames.settings.radioButtonUnselectedIcon],

            }

            return (
                <TouchableOpacity key={option.key} style={styles.optionTouchable} 
                    onPress={() => props.onSelect(option.key)}>
                    <View style={styles.iconContainer}>
                        <Icon iconStyle={iconStyle} svg={svg}/>
                    </View>
                    <Text style={styles.optionTitleText}>{option.title}</Text>
                </TouchableOpacity>
            )
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{props.menuTitle}</Text>
            {renderOptions()}
        </View>
    );
};

export default OptionMenu;
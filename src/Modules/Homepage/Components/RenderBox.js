import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useThemedColors, useThemedStyles, colorNames } from '../../Theming';
import Icon from '../../../Components/Icon';

import getStyles from '../styles/RenderBoxStyles';
import { Svgs } from '../../../StylingConstants';

const RenderBox = props => {

    const  item=props.item;
    let isSelected =props.isSelected;
    //console.log(props.isVisible)

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const _onPress_Item=(id, isSelected)=>{ 
        props.onPress_Item(id,isSelected);
    }

    return (
        <TouchableOpacity key={item.id} style={styles.box} onLongPress={props.onLongPress} >
            <TouchableOpacity style={styles.iconContainer} disabled={props.isVisible ? true : false} onPress={() => _onPress_Item(item.id, isSelected)} >
                <Icon svg={isSelected ? Svgs.CheckboxSelected : Svgs.CheckboxUnSelected} iconStyle={{
                    color: props.isVisible ?
                        colors[colorNames.homePage.shoppingItemBackround]
                        :
                        colors[colorNames.homePage.shoppingItemCheckIconSelectedBackground]
                }} />
            </TouchableOpacity>
            <View style={styles.textsContainer}>
                <Text style={styles.headerText}>{item.title}</Text>
                <Text style={styles.priceText}>{item.price} </Text>
                <Text style={styles.dateText}>{item.date}</Text>
                <Text style={styles.dayText}>{item.day}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default RenderBox;

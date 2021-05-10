import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import { useThemedColors, useThemedStyles, colorNames } from '../../Theming';
import { useLocalization, days, useLocaleDateFormat } from '../../Localization';
import Icon from '../../../Components/Icon';
import { priceSelector, setPriceAC} from '../Redux/ShoppingListRedux';

import getStyles from '../styles/RenderBoxStyles';
import { Svgs } from '../../../StylingConstants';


const RenderBox = props => {

    //const[totalPrice,setTotalPrice]=useState(0);
    const  item=props.item;
    let isSelected =props.isSelected;
    
    const dispatch=useDispatch();

    // const totalPrice=useSelector(priceSelector);
    dispatch(setPriceAC(item.price));

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const loc=useLocalization();
    const localeDate=useLocaleDateFormat();

    const _onSelect_Item=(key, isSelected)=>{ 
        props.onSelect_Item(key,isSelected);
    }
    
    const  _onPress_Item=(item)=>{
        props.onPress_Item(item);
    }

    const getLocaleDateString=(date,dateLocale)=>{
        return moment(date).format(dateLocale);
    }

    return (
        <TouchableOpacity key={item.key} style={styles.box} onLongPress={props.onLongPress} onPress={()=>_onPress_Item(item)}>
            <TouchableOpacity style={styles.iconContainer} disabled={props.isVisible ? true : false} onPress={() => _onSelect_Item(item.key, isSelected)} >
                <Icon svg={isSelected ? Svgs.CheckboxSelected : Svgs.CheckboxUnSelected} iconStyle={{
                    color: props.isVisible ?
                        colors[colorNames.homePage.shoppingItemBackround]
                        :
                        colors[colorNames.homePage.shoppingItemCheckIconSelectedBackground]
                }} />
            </TouchableOpacity>
            <View style={styles.textsContainer}>
                <Text style={styles.headerText}>{item.title}</Text>
                <Text style={styles.priceText}>{item.price + 'TL'} </Text>
                <Text style={styles.dateText}>{getLocaleDateString(item.date,localeDate)}</Text>
                <Text style={styles.dayText}>{loc.t(days[item.day])}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default RenderBox;

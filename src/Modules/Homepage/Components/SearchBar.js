import React, { useRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from '../../../Components/Icon';
import { Svgs, Metrics } from '../../../StylingConstants';
import { useLocalization, Texts } from '../../Localization';
import { useThemedColors, useThemedStyles, colorNames } from '../../Theming';

import getStyles from '../styles/SearchBarStyles';

const SearchBar = props => {

    const [searchText, setSearchText] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const [selectASC,setSelectASC]=useState(false);
    const [selectDESC,setSelectDESC]=useState(false);
    const [selectNTO,setSelectNTO]=useState(false);
    const [selectOTN,setSelectOTN]=useState(false);

    /*
    setSelectASC(false);
    setSelectDESC(false);
    setSelectNTO(false);
    setSelectOTN(false);
    */

    let textInput = useRef('');

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const loc = useLocalization();

    const _onChangeText = (text) => {
        setSearchText(text);
        if (text.length === 0) {
            console.log('boş')
        }
    }

    const _onPress = () => {
        props.onPressSearch(searchText);
        textInput.clear();
        setSearchText('');
    }

    const onPress_Sort = () => {
        setIsVisible(!isVisible);
    }

    const _onPress_asc=()=>{        
        setSelectASC(!selectASC);
        setSelectDESC(false);
        setSelectNTO(false);
        setSelectOTN(false);
        props.onPressSort_asc;
    }
    const _onPress_desc=()=>{        
        setSelectDESC(!selectDESC);
        setSelectASC(false);
        setSelectNTO(false);
        setSelectOTN(false);
        props.onPressSort_desc;
    }
    const _onPress_nto=()=>{        
        setSelectNTO(!selectNTO);
        setSelectASC(false);
        setSelectDESC(false);
        setSelectOTN(false);
        props.onPressSort_nto;
    }
    const _onPress_otn=()=>{        
        setSelectOTN(!selectOTN);
        setSelectASC(false);
        setSelectDESC(false);
        setSelectNTO(false);
        props.onPressSort_otn;
    }

    return (
        <View style={[styles.container,{paddingBottom:isVisible?Metrics.width * 0.25:0}]}>
            <View style={styles.searchBar}>
                <TextInput
                    ref={input => { textInput = input }}
                    placeholder={loc.t(Texts.search)}
                    placeholderTextColor={colors[colorNames.homePage.shoppingItemDayText]}
                    style={styles.textInput}
                    onChangeText={_onChangeText}
                />
                <TouchableOpacity style={styles.iconContainer} onPress={_onPress}>
                    <Icon svg={Svgs.Search} iconStyle={styles.icon} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.refreshContainer} onPress={props.onPressRefresh}>
                <Icon svg={Svgs.Refresh} iconStyle={styles.refresh} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortContainer} onPress={onPress_Sort}>
                <Text style={styles.sortHeaderText}>{'Sırala'}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={_onPress_nto} 
                style={[styles.sortContainer_newtoold,{borderColor:selectNTO?colors[colorNames.homePage.shoppingItemPriceText]:colors[colorNames.homePage.shoppingItemDayText]}]}>
                <Text style={[styles.sortText,{color:selectNTO?colors[colorNames.homePage.shoppingItemPriceText]:colors[colorNames.homePage.shoppingItemDayText]}]}>{'Yeniden Eskiye'}</Text>
            </TouchableOpacity>
            <TouchableOpacity  
                onPress={_onPress_otn}
                style={[styles.sortContainer_oldtonew,{borderColor:selectOTN?colors[colorNames.homePage.shoppingItemPriceText]:colors[colorNames.homePage.shoppingItemDayText]}]}>
                <Text style={[styles.sortText,{color:selectOTN?colors[colorNames.homePage.shoppingItemPriceText]:colors[colorNames.homePage.shoppingItemDayText]}]}>{'Eskiden Yeniye'}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={_onPress_asc} 
                style={[styles.sortContainer_asc,{borderColor:selectASC?colors[colorNames.homePage.shoppingItemPriceText]:colors[colorNames.homePage.shoppingItemDayText]}]}>
                <Text style={[styles.sortText,{color:selectASC?colors[colorNames.homePage.shoppingItemPriceText]:colors[colorNames.homePage.shoppingItemDayText]}]}>{'Fiyata göre artan'}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={_onPress_desc}
                style={[styles.sortContainer_desc,{borderColor:selectDESC?colors[colorNames.homePage.shoppingItemPriceText]:colors[colorNames.homePage.shoppingItemDayText]}]}>
                <Text style={[styles.sortText,{color:selectDESC?colors[colorNames.homePage.shoppingItemPriceText]:colors[colorNames.homePage.shoppingItemDayText]}]}>{'Fiyata göre azalan'}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SearchBar;

import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import { useLocalization, Texts } from '../../Localization';
import { useThemedColors, useThemedStyles, colorNames } from '../../Theming';

import getStyles from '../styles/SearchBarStyles';

const SearchBar = props => {

    const[searchText,setSearchText]=useState('');
    const empty='';

    const styles=useThemedStyles(getStyles);
    const colors=useThemedColors();

    const loc=useLocalization();

    const _onChangeText=(text)=>{
        setSearchText(text);
    }

    const _onPress=()=>{
        props.onPressSearch(searchText);
    }
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput
                    placeholder={loc.t(Texts.search)}
                    placeholderTextColor={colors[colorNames.homePage.shoppingItemDayText]}
                    style={styles.textInput}   
                    onChangeText={_onChangeText}  
                               
                />
                <TouchableOpacity style={styles.iconContainer} onPress={_onPress}>
                    <Icon svg={Svgs.Search} iconStyle={styles.icon}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SearchBar;

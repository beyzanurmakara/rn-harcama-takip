import React, { useRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import { useLocalization, Texts } from '../../Localization';
import { useThemedColors, useThemedStyles, colorNames } from '../../Theming';

import getStyles from '../styles/SearchBarStyles';

const SearchBar = props => {

    const [searchText, setSearchText] = useState('');
    let textInput=useRef('');

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
    return (
        <View style={styles.container}>
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
                <Icon svg={Svgs.Refresh} iconStyle={styles.refresh}/>
            </TouchableOpacity>
        </View>
    );
};

export default SearchBar;

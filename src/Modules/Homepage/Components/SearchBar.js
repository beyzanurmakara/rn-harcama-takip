import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from '../../../Components/Icon';
import { Svgs } from '../../../StylingConstants';
import { useThemedStyles } from '../../Theming';

import getStyles from '../styles/SearchBarStyles';

const SearchBar = props => {

    const styles=useThemedStyles(getStyles);
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput
                    placeholder={'Aramaya başla'}
                    placeholderTextColor={'black'}
                    style={styles.textInput}                    
                />
                <TouchableOpacity style={styles.iconContainer}>
                    <Icon svg={Svgs.Search} iconStyle={styles.icon}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SearchBar;

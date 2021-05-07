import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { useLocalization, Texts } from '../../Localization';
import { useThemedColors, useThemedStyles, colorNames } from '../../Theming';
import Icon from '../../../Components/Icon';
import DummyShoppingData from '../DummyShoppingList';

import CancelText from '../../../Components/CancelText';

import getStyles from '../styles/HomepageScreenStyles';
import { Svgs } from '../../../StylingConstants';

const HomePageScreenUI = props => {

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();
    const loc=useLocalization();

    const isVisble=props.isVisible;

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.boxContainer}>
                    <FlatList
                        data={props.data}
                        renderItem={props.renderItem}
                        ListEmptyComponent={props.emptyComponentt}
                        keyExtractor={(item, index) => item.id}
                        numColumns={2}
                        columnWrapperStyle={styles.columnWrapperStyle}
                        style={{ flex: 1 }}
                    //columnContainerStyle={styles.columnContainerStyle}
                    />
                </View>
                <CancelText onPress_Cancel={props.onPress_Cancel} isVisible={isVisble}/>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, {
                        backgroundColor: isVisble ?
                            colors[colorNames.homePage.addButtonBackground]
                            :
                            colors[colorNames.homePage.deleteButtonBackground]
                    }]}
                        onPress={isVisble ? props.onPress_Add : props.onPress_Delete}>
                        <Icon svg={isVisble ? Svgs.AddIcon : Svgs.DeleteIcon} iconStyle={{ color: colors[colorNames.homePage.buttonText] }} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default HomePageScreenUI;

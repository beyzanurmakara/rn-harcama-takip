import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { useLocalization, Texts, useLocaleDateFormat } from '../../Localization';
import { useThemedColors, useThemedStyles, colorNames } from '../../Theming';
import Icon from '../../../Components/Icon';
import DummyShoppingData from '../DummyShoppingList';

import RenderBox from '../Components/RenderBox';
import HomePageScreenUI from './HomeScreenUI';

import getStyles from '../styles/HomepageScreenStyles';
import { Svgs } from '../../../StylingConstants';
import { deleteItem, subscribeToItemData } from '../../../API/Firebase';
import { createShoppingListForRender } from '../Utils/RenderListUtils';
import { useDispatch } from 'react-redux';
import { setIsLoadingAC } from '../../Loading/LoadingRedux';



const HomePageScreen = props => {

    const [isVisble, setIsVisible] = useState(true);
    const [selectedItemList, setSelectedItemList] = useState([]);
    const [itemList, setItemList] = useState(null);

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const loc = useLocalization();
    const dateLocale = useLocaleDateFormat();

    const dispatch = useDispatch();

    const navigation = useNavigation();

    useEffect(() => {
        const off = subscribeToItemData((data) => {
            let shoppingList = createShoppingListForRender(data, dateLocale);
            setItemList(shoppingList);
        });
        return () => {
            off()
        }
    }, [])
    // useEffect(()=>{console.log(itemList)},[itemList])

    const _onPress_Delete = () => {

        for (let key of selectedItemList) {
            deleteItem(key);
        }
        setIsVisible(true)
    }

    const _onPress_Add = () => {
        const mode = 'add';
        navigation.navigate('add-new-screen', mode);
    }

    const _onPress_Cancel = () => {
        setSelectedItemList([]);
        setIsVisible(true);
    }

    const getIsSelected = (key) => {
        let copyList = [...selectedItemList];
        for (let i = 0; i < copyList.length; i++) {
            if (copyList[i] === key) {
                return true;
            }
        }
        return false;
    }

    const _renderShoppingList = ({ item }) => {

        let isSelected = getIsSelected(item.key);

        // checkbox seçildiğinde
        const onSelect_Item = (key, isSelected) => {
            let copyList = [...selectedItemList];
            if (isSelected) {
                let indexNumber = copyList.indexOf(key);
                copyList.splice(indexNumber, 1);
            }
            else {
                copyList.push(key);
            }

            setSelectedItemList(copyList);
        }

        // kutucuğun üstüne basıldığında
        const onPress_Item = (item) => {
            navigation.navigate('add-new-screen', {
                key: item.key,
                title: item.title,
                date: item.date,
                price: item.price,
                explanation: item.explanation,
            });
        }

        return (
            <RenderBox
                item={item}
                isVisible={isVisble}
                isSelected={isSelected}
                onLongPress={() => setIsVisible(false)}
                onSelect_Item={onSelect_Item}
                onPress_Item={onPress_Item}
            />
        );
    }
    return (
        <HomePageScreenUI
            data={itemList}
            renderItem={_renderShoppingList}
            onPress_Cancel={_onPress_Cancel}
            onPress_Add={_onPress_Add}
            onPress_Delete={_onPress_Delete}
            isVisible={isVisble}
        />
    );
};

export default HomePageScreen;

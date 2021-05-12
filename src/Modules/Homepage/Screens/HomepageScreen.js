import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useLocalization, categories, useLocaleDateFormat } from '../../Localization';
import { useThemedColors, useThemedStyles, colorNames } from '../../Theming';

import RenderBox from '../Components/RenderBox';
import HomePageScreenUI from './HomeScreenUI';

import getStyles from '../styles/HomepageScreenStyles';

import { deleteItem, getItemDetail, subscribeToItemData } from '../../../API/Firebase';
import { createShoppingListForRender } from '../Utils/RenderListUtils';
import { getProfileSubscribe, updateProfile } from '../../Settings/API/Firebase';
import { getCurrentUser } from '../../Auth';
import CreateProfile from '../Components/CreateProfile';
import Categories from '../Components/Categories';
import { setTotalAC, totalSelector } from '../Redux/TotalRedux'
import SearchBar from '../Components/SearchBar';
import { set } from 'react-native-reanimated';



const HomePageScreen = props => {

    const [isVisble, setIsVisible] = useState(true);
    const [selectedItemList, setSelectedItemList] = useState([]);
    const [itemList, setItemList] = useState(null);
    const [tempItemList, setTempItemList] = useState(null);
    const [profile, setProfile] = useState(null);
    const [isProfile, setIsProfile] = useState(false);
    const [category, setCategory] = useState('');
    const [searchItem, setSearchItem] = useState(null);
    const [searchList, setSearchList] = useState([]);

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();

    const loc = useLocalization();
    const dateLocale = useLocaleDateFormat();


    const userID = getCurrentUser().uid;
    const navigation = useNavigation();

    const dispatch = useDispatch();

    let total = 0;

    let totalRedux = totalRedux = useSelector(totalSelector);

    useEffect(() => {
        const off = subscribeToItemData((data) => {
            let shoppingList = createShoppingListForRender(data, dateLocale);
            setItemList(shoppingList);
            setTempItemList(shoppingList);
        });
        return () => {
            off()
        }
    }, [])

    useEffect(() => {

        const off = getProfileSubscribe((data) => {
            if (data === null) {
                setIsProfile(true);
            }
            else {
                setIsProfile(false)
                setProfile(data)
            }
        });
        return () => {
            off()
        }

    }, [])
    let newList = [];
    useEffect(() => {
        // console.log(searchItem);
        //console.log('useState:',searchList);
        //console.log('tempItemlist -->',tempItemList);
        console.log('Search List:', searchList)
    }, [searchList]);

    useEffect(() => {
        //console.log("********")
        if (itemList !== null) {
            for (let eleman of itemList) {
                //console.log(total)
                total += parseInt(eleman.price);
                // console.log(total);
                if (profile !== null) {
                    updateProfile({
                        income: profile.income,
                        expense: profile.expense,
                        total,
                    })
                }
            }
        }
        dispatch(setTotalAC(total))
    }, [itemList]);

    const _onPress_Delete = () => {
        console.log('---------')
        for (let key of selectedItemList) {
            console.log('*', key)
            profile !== null &&
                getItemDetail(key, item => {
                    updateProfile({
                        expense: profile.expense,
                        income: profile.income,
                        total: parseInt(profile.total) - parseInt(item.price),
                    })
                })
            deleteItem(key);

        }
        setIsVisible(true)
    }

    const _onPress_Add = () => {
        const mode = 'add';
        navigation.navigate('add-new-screen', [mode, profile]);
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
                profile={profile}
            />
        );

    }

    const _getCagetory = (categori) => {
        setCategory(categori);
        let newItemList = [];
        if (categori === null) {
            setTempItemList(itemList);
        }
        else {
            for (let eleman of itemList) {
                if (eleman.title == loc.t(categories[categori.name])) {
                    newItemList.push(eleman);
                }
            }
            console.log(newItemList)
            if (newItemList.length !== 0) {
                setTempItemList(newItemList);
            }
            else {
                setTempItemList(itemList)

            }
        }

    }
    const getSearchList = async () => {
        
    }
    const _onPress_Search = (text) => {
        let newItemList = [];
        if (text.length !== 0) {
            for (let item of itemList) {
                if (item.key) {
                    getItemDetail(item.key, data => {
                        let detail = data.detail;
                        if (detail.search(text) !== -1) {
                            console.log(item);
                            //newItemList.push(item)
                        }
                    })

                }
            }
        }
       // console.log(newItemList)

    }
    return (
        <>
            {
                isProfile ?
                    <CreateProfile isProfile={isProfile} />
                    :
                    null
            }
            <Categories onPress_Item={_getCagetory} />
            {/* <Text>Toplam Harcamanız: {profile?.total} TL</Text> */}
            {/* <Text>Toplam Harcamanız: {profile!==null?profile.total:totalRedux} TL</Text> */}
            <SearchBar onPressSearch={_onPress_Search} />
            <HomePageScreenUI
                data={tempItemList}
                renderItem={_renderShoppingList}
                onPress_Cancel={_onPress_Cancel}
                onPress_Add={_onPress_Add}
                onPress_Delete={_onPress_Delete}
                isVisible={isVisble}
                profile={profile}
            />
        </>
    );
};

export default HomePageScreen;

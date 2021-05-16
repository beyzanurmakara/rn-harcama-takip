import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { useLocalization, categories, useLocaleDateFormat, Texts } from '../../Localization';
import { useThemedColors, useThemedStyles, colorNames } from '../../Theming';

import RenderBox from '../Components/RenderBox';
import HomePageScreenUI from './HomeScreenUI';

import getStyles from '../styles/HomepageScreenStyles';

import { deleteItem, getItemDetail, subscribeToItemData } from '../../../API/Firebase';
import { createShoppingListForRender } from '../Utils/RenderListUtils';
import { getProfileSubscribe, updateProfile } from '../../Profile/API/Firebase';
import { getCurrentUser } from '../../Auth';
import CreateProfile from '../Components/CreateProfile';
import Categories from '../Components/Categories';
import { setTotalAC, totalSelector } from '../Redux/TotalRedux'
import SearchBar from '../Components/SearchBar';
import { setIsLoadingAC } from '../../Loading/LoadingRedux';
import { setWarningCodeAC } from '../../Warning/WarningRedux';



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

    let total = 0;/***** */

    let totalRedux = useSelector(totalSelector);

    useEffect(() => {
        dispatch(setIsLoadingAC(true));
        const off = subscribeToItemData((data) => {
            let shoppingList = createShoppingListForRender(data, dateLocale);
            //console.log(shoppingList)
            setItemList(shoppingList);
            setTempItemList(shoppingList);
            dispatch(setIsLoadingAC(false));
        });
        return () => {
            off()
        }
    }, [])

    useEffect(() => {
        dispatch(setIsLoadingAC(true));
        const off = getProfileSubscribe((data) => {
            console.log('Profile >> ',data)
            if (data === null) {
                setIsProfile(true);
            }
            else {
                setIsProfile(false)
                setProfile(data)
            }
            dispatch(setIsLoadingAC(false));
        });
        return () => {
            off()
        }

    }, [])
    
    useEffect(()=>{
        profile!==null?setIsProfile(false):null;
    },[profile])


    useEffect(() => {
        if (itemList !== null) {
            for (let eleman of itemList) {
                if (parseInt(eleman.date.split('-')[1]) === parseInt(moment().format('DD-MM-YYYY').split('-')[1])) {

                    total += parseFloat(eleman.price);
                    console.log(total)
                    console.log(eleman.price)
                }
                console.log(profile);
                if (profile !== null) {
                    updateProfile({
                        income: profile.income,
                        expense: profile.expense,
                        total,
                    })
                    if (profile.expense < total && profile.expense !== 0) {
                        dispatch(setWarningCodeAC(
                            (parseFloat(total) - parseFloat(profile.expense)).toString()
                            + ' ' + loc.t(Texts.currencyUnit) + ' ' + loc.t(Texts.limit)))
                    }
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
                        total: parseFloat(profile.total) - parseFloat(item.price),
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

    const _onPress_Search = (text) => {
        let newItemList = [];
        if (text.length !== 0) {
            for (let item of itemList) {
                if (item.detail.search(text) !== -1) {
                    newItemList.push(item);
                }
            }
            if (newItemList.length !== 0) {
                setTempItemList(newItemList);
            }
            else {
                setTempItemList(itemList)

            }
        }
        else {
            setTempItemList(itemList)
        }
    }

    const _onPress_Refresh = () => {
        setTempItemList(itemList)
    }

    const _onPress_NTO = () => {
        let copyList = [...tempItemList];
        let sortedOldToNew = copyList.sort((a, b) => (a.date.split(' ')[0] > b.date.split(' ')[0]) ? 1 : -1) //eskiden yeniye sıralama yapıyor
        let sortedNewtoNew = sortedOldToNew.reverse();// yeniden eskiye sıralama yapıyor
        setTempItemList(sortedNewtoNew);
        //setTempItemList([]);
        //console.log(sortedOldToNew)

    }
    const _onPress_ASC = () => {
        let copyList = [...tempItemList];
        let sortedASC = copyList.sort(function (a, b) { return a.price - b.price})
        setTempItemList(sortedASC)
        /*
        list.sort((a, b) => (a.color > b.color) ? 1 : (a.color === b.color) ? ((a.size > b.size) ? 1 : -1) : -1 )
        */
    }
    const _onPress_DESC = () => {
        let copyList = [...tempItemList];
        let sortedDESC= copyList.sort(function (a, b) { return a.price - b.price}).reverse()
        setTempItemList(sortedDESC)
    }
    const _onPress_OTN = () => {
        let copyList = [...tempItemList];
        let sortedOldToNew = copyList.sort((a, b) => (a.date.split(' ')[0] > b.date.split(' ')[0]) ? 1 : -1) //eskiden yeniye sıralama yapıyor
        setTempItemList(sortedOldToNew);
        console.log('OTN')
    }
    return (
        <>
            {
                isProfile?
                    <CreateProfile isProfile={isProfile} />
                    :
                    null
            }
            <Categories onPress_Item={_getCagetory} />
            {/* <Text>Toplam Harcamanız: {profile?.total} TL</Text> */}
            {/* <Text>Toplam Harcamanız: {profile!==null?profile.total:totalRedux} TL</Text> */}
            <SearchBar
                onPressSearch={_onPress_Search}
                onPressRefresh={_onPress_Refresh}
                onPressSort_asc={_onPress_ASC}
                onPressSort_desc={_onPress_DESC}
                onPressSort_nto={_onPress_NTO}
                onPressSort_otn={_onPress_OTN} />
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

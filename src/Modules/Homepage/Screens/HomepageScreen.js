import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { useLocalization, Texts } from '../../Localization';
import { useThemedColors, useThemedStyles, colorNames } from '../../Theming';
import Icon from '../../../Components/Icon';
import DummyShoppingData from '../DummyShoppingList';

import RenderBox from '../Components/RenderBox';
import HomePageScreenUI  from './HomeScreenUI';

import getStyles from '../styles/HomepageScreenStyles';
import { Svgs } from '../../../StylingConstants';



const HomePageScreen = props => {

    const [isVisble,setIsVisible]=useState(true);
    const [selectedItemList,setSelectedItemList]=useState([]);

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();
    const loc=useLocalization();

    const navigation = useNavigation();
    const _onPress_Delete=()=>{
        console.log(selectedItemList);
        setSelectedItemList([]);
        setIsVisible(true)
    }

    // const {item}=props.route.params;
    // console.log('homePage: ',item);
    const _onPress_Add=()=>{
       
        const mode ='add';
        navigation.navigate('add-new-screen', mode);
        //console.log('ekleme işlemi yapacagım');
    }

    const _onPress_Cancel=()=>{
        setSelectedItemList([]);
        setIsVisible(true);
    }

    const getIsSelected=(id)=>{
        //let result=false;
        let copyList=[...selectedItemList];
        for(let i=0;i<copyList.length;i++){
            if(copyList[i]===id){
                return true;
            }
        }
        return false;
    }
    const _renderShoppingList =({item})=>{ 

        let isSelected = getIsSelected(item.id);

        // checkbox seçildiğinde
        const onSelect_Item=(id, isSelected)=>{ 
            let copyList=[...selectedItemList];
            if(isSelected){
                let indexNumber=copyList.indexOf(id);
                copyList.splice(indexNumber, 1);
            }
            else{
                copyList.push(id);
            }
            console.log(copyList);
            setSelectedItemList(copyList); 
        }

        // kutucuğun üstüne basıldığında
        const  onPress_Item=(item)=>{
            console.log(item.id)
            navigation.navigate('add-new-screen', {
                id:item.id,
                title:item.title,
                date:item.date,
                price:item.price,
                explanation:item.explanation,
            });
        }
        
        return(
            <RenderBox  
                item={item} 
                isVisible={isVisble}
                isSelected={isSelected}
                onLongPress={()=>setIsVisible(false)}
                onSelect_Item={onSelect_Item} 
                onPress_Item={onPress_Item}               
            />
        );
    }

    return (
        <HomePageScreenUI
            data={DummyShoppingData}
            renderItem={_renderShoppingList}
            onPress_Cancel={_onPress_Cancel}
            onPress_Add={_onPress_Add}
            onPress_Delete={_onPress_Delete}
            isVisible={isVisble}
        />
    );
};

export default HomePageScreen;

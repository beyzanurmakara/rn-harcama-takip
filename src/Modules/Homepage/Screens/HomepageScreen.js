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



const SettingsScreen = props => {

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

    const _onPress_Add=()=>{
       
        navigation.navigate('add-new-screen');
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
        // kutucuklara tıkladığında
        const _onPress_Item=(id, isSelected)=>{ 
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
            //console.log(isSelected)
            
        }
        
        return(
            <RenderBox  
                item={item} 
                isVisible={isVisble}
                isSelected={isSelected}
                onLongPress={()=>setIsVisible(false)}
                onPress_Item={_onPress_Item}
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

export default SettingsScreen;

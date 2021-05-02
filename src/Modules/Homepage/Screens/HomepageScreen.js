import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { useLocalization, Texts } from '../../Localization';
import { useThemedColors, useThemedStyles, colorNames } from '../../Theming';
import Icon from '../../../Components/Icon';
import DummyShoppingData from '../DummyShoppingList';

import getStyles from '../styles/HomepageScreenStyles';
import { Svgs } from '../../../StylingConstants';
import Svg from 'react-native-svg';

const SettingsScreen = props => {

    const [isVisble,setIsVisible]=useState(true);
    const [deletedItem,setDeletedItem]=useState([]);
    const [select,setSelect]=useState(false);

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();
    const loc=useLocalization();

    const _onPress_Delete=()=>{

        //console.log("silme işlemi yapacagım");
        // ÖN İŞLEM ( AYNI ELEMANLAR BULUNAMAZ )
        //eger aynı kutucuğa bastıysa o elemanı silme listesinden kaldırsın.
        let iIndex=0;
        let jIndex=0;
        for (let i=0;i<deletedItem.length;i++){
            for(let j=i+1;j<deletedItem.length;j++){
                if(deletedItem[i]===deletedItem[j]){
                    iIndex=i;
                    console.log(iIndex)
                    jIndex=j;
                    console.log(jIndex)
                }
            }
        }
        if(iIndex === 0 && jIndex === 0){
            console.log("seçilenlerin eşi benzeri yok :)");
        }
        else{
            let copyDeletedItem=[...deletedItem];
            copyDeletedItem.splice(iIndex,1);
            copyDeletedItem.splice(jIndex,1);
            setDeletedItem(copyDeletedItem);
        }
        // buraya kadar  veri temizlendi
        // silme işlemi yapılacak
        deleteItems();
    }

    const _onPress_Add=()=>{
        const navigation = useNavigation();
        navigation.navigator('add-new-screen');
        //console.log('ekleme işlemi yapacagım');
    }
    const deleteItems=()=>{
        console.log(deletedItem);
    }

    const _renderShoppingList =({item})=>{ 

        let selected=false;

        let svg=Svgs.CheckboxUnSelected;



        // kutucuklara tıkladığında
        const _onPress_Item=()=>{ 
            let slc=select;
            setSelect(!slc);
            selected=!selected;
            if(selected){
                svg=Svgs.CheckboxSelected;
            }
            else {
                svg=Svgs.CheckboxUnSelected;
            }
            const deletedItemCopy=[...deletedItem];
            deletedItemCopy.push(item.id);
            setDeletedItem(deletedItemCopy); 
            //console.log(deletedItem);           
        }
        
        return(
            <TouchableOpacity key={item.id} style={styles.box} onLongPress={()=>setIsVisible(false)} onPress={()=>setIsVisible(true)} > 
                <TouchableOpacity style={styles.iconContainer} disabled={isVisble ? true : false} onPress={_onPress_Item} >
                    <Icon svg={select ? Svgs.CheckboxSelected : Svgs.CheckboxUnSelected} iconStyle={{ color: isVisble ? 
                                colors[colorNames.homePage.shoppingItemBackround] 
                                : 
                                colors[colorNames.homePage.shoppingItemCheckIconSelectedBackground] }} />
                </TouchableOpacity>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text style={styles.headerText}>{item.title}</Text>
                    <Text style={styles.priceText}>{item.price} </Text>
                    <Text style={styles.dateText}>{item.date}</Text>
                    <Text style={styles.dayText}>{item.day}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <View  style={styles.boxContainer}>                    
                    <FlatList
                        data={DummyShoppingData}
                        renderItem={_renderShoppingList}
                        keyExtractor={(item, index) => item.id}
                        numColumns={2}
                        columnWrapperStyle={styles.columnWrapperStyle}
                        style={{flex:1}}
                        //columnContainerStyle={styles.columnContainerStyle}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button,{backgroundColor: isVisble ? 
                                            colors[colorNames.homePage.addButtonBackground] 
                                            : 
                                            colors[colorNames.homePage.deleteButtonBackground]}]}
                                        onPress={isVisble ? _onPress_Add : _onPress_Delete}>
                        <Icon svg={isVisble ? Svgs.AddIcon : Svgs.DeleteIcon} iconStyle={{color:colors[colorNames.homePage.buttonText]}}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default SettingsScreen;

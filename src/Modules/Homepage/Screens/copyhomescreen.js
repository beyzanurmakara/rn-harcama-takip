import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { useLocalization, Texts } from '../../Localization';
import { useThemedColors, useThemedStyles, colorNames } from '../../Theming';
import Icon from '../../../Components/Icon';
import DummyShoppingData from '../DummyShoppingList';

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
            <TouchableOpacity key={item.id} style={styles.box} onLongPress={()=>setIsVisible(false)} > 
                <TouchableOpacity style={styles.iconContainer} disabled={isVisble ? true : false} onPress={()=>_onPress_Item(item.id, isSelected)} >
                    <Icon svg={isSelected? Svgs.CheckboxSelected : Svgs.CheckboxUnSelected} iconStyle={{ color: isVisble ? 
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
                <View style={[styles.cancelTextContainer]}>
                    <TouchableOpacity onPress={_onPress_Cancel}>
                        <Text style={[styles.cancelText ,
                                     isVisble ? 
                                     {color:colors[colorNames.homePage.background]}
                                     :
                                     {color:colors[colorNames.homePage.deleteButtonBackground]}]}>
                            {loc.t(Texts.cancel).toUpperCase()}
                            </Text>
                    </TouchableOpacity>
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

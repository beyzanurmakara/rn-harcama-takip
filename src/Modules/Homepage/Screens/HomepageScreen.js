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

    const styles = useThemedStyles(getStyles);
    const colors = useThemedColors();
    const loc=useLocalization();

    const _renderShoppingList =({item})=>{
        
        return(
            <TouchableOpacity key={item.id} style={styles.box} onLongPress={()=>setIsVisible(false)} onPress={()=>setIsVisible(true)} > 
                <TouchableOpacity style={styles.iconContainer} disabled={isVisble ? true : false} >
                    <Icon svg={Svgs.CheckboxUnSelected} iconStyle={{ color: isVisble ? 
                                colors[colorNames.homePage.shoppingItemBackround] 
                                : 
                                colors[colorNames.homePage.shoppingItemCheckIconUnSelectedBackground] }} />
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
                                            colors[colorNames.homePage.deleteButtonBackground]}]}>
                        <Icon svg={isVisble ? Svgs.AddIcon : Svgs.DeleteIcon} iconStyle={{color:colors[colorNames.homePage.buttonText]}}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default SettingsScreen;

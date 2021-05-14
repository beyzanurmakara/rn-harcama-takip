import { StyleSheet } from 'react-native';

import { colorNames } from '../../Theming';
import { Fonts, Metrics } from '../../../StylingConstants';

export default Colors=>StyleSheet.create({
    box:{
        backgroundColor:Colors[colorNames.homePage.shoppingItemBackround],
        borderColor:Colors[colorNames.homePage.shoppingItemBorder],
        borderWidth:1,
        borderRadius:Metrics.borderRadiusStandard,
        padding:Metrics.width * 0.02,
        height:undefined,//Metrics.width * 0.3,
        width:Metrics.width * 0.4,
        aspectRatio:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    iconContainer:{
        position:'absolute',
        left:Metrics.width * 0.023,
        top:Metrics.width * 0.023,
        width:Metrics.width * 0.07,
        height:Metrics.width * 0.07,
        //backgroundColor:'pink',
        padding:Metrics.width * 0.01,

    },
    textsContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    headerText:{
        color:Colors[colorNames.homePage.shoppingItemHeaderText],
        fontFamily:Fonts.type.semiBold,
        fontSize:Fonts.size(16),

    },
    priceText:{
        color:Colors[colorNames.homePage.shoppingItemPriceText],
        fontFamily:Fonts.type.regular,
        fontSize:Fonts.size(16),
    },
    dateText:{
        color:Colors[colorNames.homePage.shoppingItemDateText],
        fontFamily:Fonts.type.regular,
        fontSize:Fonts.size(14),
    },
    dayText:{
        color:Colors[colorNames.homePage.shoppingItemDayText],
        fontFamily:Fonts.type.regular,
        fontSize:Fonts.size(14),
    },
});

import { StyleSheet } from 'react-native';

import { colorNames } from '../../Theming';
import { Metrics } from '../../../StylingConstants';

export default Colors => StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:Colors[colorNames.settings.background],
        padding:Metrics.marginHorizontal,
        //padding: Metrics.marginHorizontal,
    },
    boxContainer:{
        backgroundColor:Colors[colorNames.homePage.shoppingItemBackround],
        borderColor:Colors[colorNames.homePage.shoppingItemBorder],
        borderWidth:1,
        borderRadius:Metrics.borderRadiusStandard,
        padding:Metrics.width * 0.03,
        height:Metrics.width * 0.3,
        width:Metrics.width * 0.3,
        justifyContent:'center',
        alignItems:'center',
    },
    headerText:{
        color:Colors[colorNames.homePage.shoppingItemHeaderText],

    },
    priceText:{
        color:Colors[colorNames.homePage.shoppingItemPriceText],
    },
    dateText:{
        color:Colors[colorNames.homePage.shoppingItemDateText],
    },
    dayText:{
        color:Colors[colorNames.homePage.shoppingItemDayText]
    },
    button:{
        backgroundColor:'pink',
        width:Metrics.width * 0.1,
        height:undefined,
        aspectRatio:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:Metrics.borderRadiusFullRound,
    },
    buttonContainer:{
        flex:0.1, 
        justifyContent:'flex-end',
        alignItems:'flex-end'
    }
});

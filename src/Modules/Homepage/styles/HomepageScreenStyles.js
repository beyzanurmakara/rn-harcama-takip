import { StyleSheet } from 'react-native';

import { colorNames } from '../../Theming';
import { Fonts, Metrics } from '../../../StylingConstants';

export default Colors => StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:Colors[colorNames.settings.background],
        padding:Metrics.marginHorizontal,
        //padding: Metrics.marginHorizontal,
    }, 
    columnWrapperStyle: {
        // backgroundColor: 'yellow',
        justifyContent: 'space-around',
        marginVertical: Metrics.width * 0.025,
    },
    contentContainerStyle: {
        backgroundColor:'yellow',
        marginTop: Metrics.width * 0.035,
    },
    boxContainer:{ 
        //flex:1, 
        paddingVertical:Metrics.width * 0.05,
        flexDirection:'row',
        //backgroundColor:'pink',
        flexShrink:1,
        //justifyContent:'space-around'
    },
    box:{
        backgroundColor:Colors[colorNames.homePage.shoppingItemBackround],
        borderColor:Colors[colorNames.homePage.shoppingItemBorder],
        borderWidth:1,
        borderRadius:Metrics.borderRadiusStandard,
        padding:Metrics.width * 0.02,
        height:undefined,//Metrics.width * 0.3,
        width:Metrics.width * 0.36,
        aspectRatio:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },       
    iconContainer:{
        position:'absolute',
        left:Metrics.width * 0.03,
        top:Metrics.width * 0.03,
        width:Metrics.width * 0.04,
        height:Metrics.width * 0.04,
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
    button:{
        backgroundColor:Colors[colorNames.homePage.addButtonBackground],
        width:Metrics.width * 0.15,
        height:undefined,
        aspectRatio:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:Metrics.borderRadiusFullRound,
        padding:Metrics.width * 0.03,
    },
    buttonContainer:{
        position:'absolute',
        left:Metrics.width * 0.75,
        top:Metrics.height * 0.8,
        //flex:0.2,
        //backgroundColor:'yellow'
    },
});

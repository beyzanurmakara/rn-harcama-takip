import { StyleSheet } from 'react-native';

import { colorNames } from '../../Theming';
import { Fonts, Metrics } from '../../../StylingConstants';

export default Colors => StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:Colors[colorNames.settings.background],
        padding:Metrics.marginHorizontal/2,
        //padding: Metrics.marginHorizontal,
    }, 
    columnWrapperStyle: {
        // backgroundColor: 'yellow',
        justifyContent: 'space-around',
        marginVertical: Metrics.width * 0.025,
    },
    contentContainerStyle: {
        //backgroundColor:'yellow',
        marginTop: Metrics.width * 0.035,
    },
    boxContainer:{ 
        //flex:1, 
        paddingVertical:Metrics.width * 0.03,
        flexDirection:'row',
        //backgroundColor:'pink',
        flexShrink:1,
        //justifyContent:'space-around'
    },  
    button:{
        //backgroundColor:Colors[colorNames.homePage.addButtonBackground],
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
        right:Metrics.width * 0.01,
        bottom:Metrics.height * 0.01,
        // left:Metrics.width * 0.75,
        // top:Metrics.height * 0.8,
        //flex:0.2,
        //backgroundColor:'yellow'
    },
    emptyFlatContainer:{
        padding:Metrics.marginHorizontal,
        justifyContent:'center',
        alignItems:'center',
    },
    emptyFlatText:{
        fontFamily:Fonts.type.semiBold,
        fontSize:Fonts.size(16),
        color:Colors[colorNames.homePage.shoppingItemHeaderText]
    }
});

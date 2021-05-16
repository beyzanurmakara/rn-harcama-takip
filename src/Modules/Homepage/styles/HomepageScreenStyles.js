import { StyleSheet } from 'react-native';

import { colorNames } from '../../Theming';
import { Fonts, Metrics } from '../../../StylingConstants';

export default Colors => StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:Colors[colorNames.settings.background],
        padding:Metrics.marginHorizontal/2,
    }, 
    columnWrapperStyle: {
        justifyContent: 'space-around',
        marginVertical: Metrics.width * 0.025,
    },
    contentContainerStyle: {
        marginTop: Metrics.width * 0.035,
    },
    boxContainer:{ 
        paddingVertical:Metrics.width * 0.03,
        flexDirection:'row',
        flexShrink:1,
    },  
    button:{
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

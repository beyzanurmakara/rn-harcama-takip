import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import {colorNames} from '../../Theming';

export default Colors=> StyleSheet.create({
    containerTouch:{
        borderColor:Colors[colorNames.addNew.categoryBorder],
        borderWidth:1,
        backgroundColor:Colors[colorNames.addNew.categoryHeaderBackground],
        padding:Metrics.textMargin,
        borderRadius:Metrics.borderRadiusStandard,
        marginBottom:Metrics.width * 0.03,
    },
    textHeader:{
        color:Colors[colorNames.addNew.categoryHeaderText],
        fontFamily:Fonts.type.semiBold,
        fontSize:Fonts.size(16),
    },
    text:{
        color:Colors[colorNames.addNew.categorylistText],
        fontFamily:Fonts.type.regular,
        fontSize:Fonts.size(16),
    },
    textContainer:{
        backgroundColor:Colors[colorNames.addNew.categoryItemBackground],
        margin:Metrics.width * 0.02,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:Metrics.borderRadiusStandard,
        paddingVertical:Metrics.width * 0.01,
        
    },
    flatContainer:{
        backgroundColor:Colors[colorNames.addNew.categoryListBackground],
        borderRadius:Metrics.borderRadiusStandard,        
        marginBottom:Metrics.width * 0.03,
        height:Metrics.width * 0.45,
    },
    separator:{
        borderWidth:2,
        borderColor:Colors[colorNames.addNew.separator],
        marginHorizontal:Metrics.width * 0.05,
        borderRadius:10
    }
});

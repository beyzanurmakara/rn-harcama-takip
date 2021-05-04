import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import {  colorNames } from '../../Theming';

export default (Colors)=>StyleSheet.create({
    dateContainer:{
        borderRadius:Metrics.borderRadiusStandard,
        borderColor:Colors[colorNames.addNew.textInputBorder],
        borderWidth:1,
        flexDirection:'row',
        paddingHorizontal:Metrics.textMargin,
        alignItems:'center'
    },
    dateTextContainer:{
        width:Metrics.width * 0.6,
        height:Metrics.width * 0.11,
        borderWidth:1,
        borderColor:Colors[colorNames.addNew.textInputBackground],
        justifyContent:'center',
        //alignItems:'center',
        flexShrink:1,
    },
    dateText:{
        fontFamily:Fonts.type.regular,
        fontSize:Fonts.size(16),
        color:Colors[colorNames.addNew.textInputText]
    },
    iconContainer:{
        paddingHorizontal:Metrics.textMargin,
        justifyContent:'center',
        width:Metrics.width * 0.11,
        height:undefined,
        aspectRatio:1,
    },
    todayTextContainer:{
        paddingLeft:Metrics.textMargin,
        justifyContent:'center',
    },
    todayText:{
        fontFamily:Fonts.type.regular,
        fontSize:Fonts.size(14),
        color:Colors[colorNames.addNew.todayText]
    },
});

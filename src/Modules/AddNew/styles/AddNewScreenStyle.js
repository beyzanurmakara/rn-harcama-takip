import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import {  colorNames } from '../../Theming';

export default (Colors)=> StyleSheet.create({
    container:{
        flex:1,
        padding:Metrics.marginHorizontal,
        paddingBottom:0,
    },
    inputsContainer:{
        flex:0.9,
    },
    inputContainer:{
        marginBottom:Metrics.width * 0.03,
    },
    buttonContainer:{
        flex:0.1,
    },    
//
    dateContainer:{
        borderRadius:Metrics.borderRadiusStandard,
        borderColor:Colors[colorNames.addNew.textInputBorder],
        borderWidth:1,
        flexDirection:'row',
        paddingHorizontal:Metrics.textMargin,
    },
    dateTextContainer:{
        width:Metrics.width * 0.6,
        height:Metrics.width * 0.1,
        borderWidth:1,
        borderColor:Colors[colorNames.addNew.textInputBackground],
        justifyContent:'center',
        //alignItems:'center',
        flexShrink:1,
    },
    dateText:{
        fontFamily:Fonts.type.regular,
        fontSize:Fonts.size(14),
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
//
    button:{
        justifyContent:'center',
        alignItems:'center',
        height: Metrics.boxNormalHeight,
        backgroundColor:Colors[colorNames.addNew.addButtonBackground],
        borderRadius:Metrics.borderRadiusStandard,
    },
    addText:{
        fontFamily:Fonts.type.regular,
        fontSize:Fonts.size(16),
        color:Colors[colorNames.addNew.addButtonText]
    }
});

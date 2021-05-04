import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import {  colorNames } from '../../Theming';

export default (Colors)=> StyleSheet.create({
    scrollView:{
        flex:1, 
        backgroundColor:Colors[colorNames.addNew.background]
    },
    container:{
        flex:1,
        padding:Metrics.marginHorizontal,
        paddingBottom:0,
        backgroundColor:Colors[colorNames.addNew.background]
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
    
});

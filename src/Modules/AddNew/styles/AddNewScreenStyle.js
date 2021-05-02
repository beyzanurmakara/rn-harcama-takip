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
    
});

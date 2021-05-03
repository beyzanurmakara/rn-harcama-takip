import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import {  colorNames } from '../../Theming';

export default Colors=>StyleSheet.create({
    container:{
        borderColor:Colors[colorNames.addNew.textInputBorder],
        borderWidth:1,
        borderRadius:Metrics.borderRadiusStandard,
    },
    input:{
        padding:Metrics.textMargin,
        flexShrink:1,
        fontFamily:Fonts.type.regular,
        fontSize:Fonts.size(16),
        color:Colors[colorNames.addNew.textInputText],
    }
});

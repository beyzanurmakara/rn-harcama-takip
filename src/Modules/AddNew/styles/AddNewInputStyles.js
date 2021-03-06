import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import {  colorNames } from '../../Theming';

export default Colors => StyleSheet.create({
    inputContainer:{
        paddingHorizontal:Metrics.textMargin,
        backgroundColor:Colors[colorNames.addNew.textInputBackground],
    },
    input:{
        color:Colors[colorNames.addNew.textInputText],
        fontFamily:Fonts.type.regular,
        fontSize:Fonts.size(16),
    }
});

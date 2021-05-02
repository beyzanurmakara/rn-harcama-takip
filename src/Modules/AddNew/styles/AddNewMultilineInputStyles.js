import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import {  colorNames } from '../../Theming';

export default Colors=>StyleSheet.create({
    input:{
        borderColor:Colors[colorNames.addNew.textInputBorder],
        borderWidth:1,
        borderRadius:Metrics.borderRadiusStandard,
        flexShrink:1,
    }
});

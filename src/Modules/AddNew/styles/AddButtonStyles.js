import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import {  colorNames } from '../../Theming';

export default Colors=> StyleSheet.create({
    button:{
        justifyContent:'center',
        alignItems:'center',
        height: Metrics.boxNormalHeight,
        backgroundColor:Colors[colorNames.addNew.addButtonBackground],
        borderRadius:Metrics.borderRadiusStandard,
        marginBottom:Metrics.width * 0.03,
    },
    addText:{
        fontFamily:Fonts.type.semiBold,
        fontSize:Fonts.size(16),
        color:Colors[colorNames.addNew.addButtonText]
    }
});

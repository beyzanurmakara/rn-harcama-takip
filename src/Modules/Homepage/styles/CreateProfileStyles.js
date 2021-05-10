import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';

export default Colors => StyleSheet.create({
    container:{
        padding:Metrics.marginHorizontal,
        backgroundColor:'black',
    },
    text:{
        fontFamily:Fonts.type.semiBold,
        fontSize:Fonts.size(15),
        color:'lightblue'
    }
});

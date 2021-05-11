import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { colorNames } from '../../Theming';

export default Colors => StyleSheet.create({
    container:{
        padding:Metrics.marginHorizontal,
        backgroundColor:Colors[colorNames.createProfile.containerBackGround],
        padding:Metrics.width * 0.03,
    },
    innerContainer:{
       backgroundColor:Colors[colorNames.createProfile.background],
       padding:Metrics.width * 0.03,
       borderRadius:Metrics.borderRadiusStandard,
       justifyContent:'center',
    },
    text:{
        fontFamily:Fonts.type.semiBold,
        fontSize:Fonts.size(15),
        color:Colors[colorNames.createProfile.text],
    },
    fromHereText:{
        color:Colors[colorNames.createProfile.fromHereText],
        fontFamily:Fonts.type.semiBold,
        fontSize:Fonts.size(15),
    }
});

import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { colorNames } from '../../Theming';

export default Colors=>StyleSheet.create({
    modal:{
        justifyContent:'flex-start',
        alignItems:'center',
    },
    container:{
        width:Metrics.width * 0.9,
        height:undefined,
        backgroundColor:Colors[colorNames.error.background],
        borderRadius:Metrics.borderRadiusStandard,
        padding:Metrics.width * 0.03,
        justifyContent:'space-between',
        elevation:50,        
        flexDirection:'row',
        alignItems:'center',
        borderColor:Colors[colorNames.error.containerBorderColor],
        borderWidth:1,
    },
    messageText:{
        flexShrink:1,
        color:Colors[colorNames.error.messageTextColor],
        marginRight:Metrics.width * 0.03,
        fontFamily:Fonts.type.regular,
        fontSize:Fonts.size(14),
        
    },
    buttonContainer:{
        width:40,
        height:undefined,
        aspectRatio:1,
    },
    errorText:{
        fontFamily:Fonts.type.bold,
        fontSize:Fonts.size(16),
        color:Colors[colorNames.error.errorTextColor]
    },
    errorTexContainer:{
        width:Metrics.width * 0.5,
        height:Metrics.width * 0.06,
        backgroundColor:Colors[colorNames.error.errorTextBackground],
        alignItems:'center',
        borderTopRightRadius:Metrics.borderRadiusStandard,
        borderTopLeftRadius:Metrics.borderRadiusStandard,
    }
});

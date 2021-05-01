import { StyleSheet } from 'react-native';
import { colorNames } from '../../Theming';
import { Metrics, Fonts } from '../../../StylingConstants';

export default (Colors)=>StyleSheet.create({
    safeArea:{
        flex:1,
        backgroundColor:Colors[colorNames.auth.background],
    },
    keyboardAvoiding:{
        flex:1,
    },
    container:{
        flex:1,
        paddingHorizontal: Metrics.marginHorizontal,
        paddingBottom:Metrics.width * 0.03,
        justifyContent:'space-between',
    },
    appLogoContainer:{
        flex:0.6,
        justifyContent:'center',
        alignItems:'center',
        
    },
    image:{
        width:undefined,
        height:'80%',
        aspectRatio:1,
        resizeMode:'contain',
    },
    inputsContainer: {
        minHeight: Metrics.width * 0.5,
        justifyContent: 'center',
    },
    inputContainer: {
        marginVertical: Metrics.width * 0.02,
    },
    buttonsContainer: {
        justifyContent: 'center',
    },
    signupTouchable: {
        alignItems: 'center',
        marginTop: Metrics.width * 0.02,
        backgroundColor: Colors[colorNames.auth.paleButtonBackground],
    },
    signupText: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(16),
        color: Colors[colorNames.auth.paleButtonText],
    },
    appNameContainer:{
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:Metrics.width * 0.02,
    },
    appNameText:{
        fontFamily:Fonts.type.logo,
        fontSize:Fonts.size(30),
        color:Colors[colorNames.auth.appNameText],
    }
});

import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { colorNames } from '../../Theming';

export default Colors=>StyleSheet.create({
    container:{
        backgroundColor:Colors[colorNames.editProfile.background],
        padding:Metrics.marginHorizontal,
        borderRadius:Metrics.borderRadiusStandard,
    },
    emailContainer:{
        marginBottom:Metrics.width * 0.02,
    },
    text:{
        fontFamily:Fonts.type.semiBold,
        fontSize:Fonts.size(15),
        paddingBottom:Metrics.width * 0.02,
        color:Colors[colorNames.editProfile.text]
    },
    emailText:{
        fontFamily:Fonts.type.semiBold,
        fontSize:Fonts.size(15),
        paddingVertical:Metrics.width * 0.02,
        color:Colors[colorNames.editProfile.text]
    },
    textInputContainer:{
        flexDirection:'row', 
        alignItems:'center',
        justifyContent:'space-between', 
        borderColor:Colors[colorNames.editProfile.borderColor],
        borderWidth:1,
        borderRadius:Metrics.borderRadiusStandard,
        marginBottom:Metrics.width * 0.02,   
        padding:Metrics.width * 0.01,
    },
    textInput:{
        marginLeft:10,
        backgroundColor:Colors[colorNames.editProfile.inputBackground],
        width:Metrics.width * 0.5,
        color:'black',
        borderRadius:Metrics.borderRadiusStandard,
    },    
    inputText:{
        fontFamily:Fonts.type.semiBold,
        fontSize:Fonts.size(15),
        color:Colors[colorNames.editProfile.text]
    },
    optionTouch:{
        backgroundColor:Colors[colorNames.editProfile.yesNoButton],
        borderRadius:Metrics.borderRadiusFullRound,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        width:Metrics.width * 0.2,
        height:Metrics.width * 0.12,
    },
    expenseContainer:{ 
        borderColor:Colors[colorNames.editProfile.borderColor],
        borderWidth:1,
        borderRadius:Metrics.borderRadiusStandard,
        marginBottom:Metrics.width * 0.02,   
        padding:Metrics.width * 0.01,
    },
    expenseTextInput:{
        backgroundColor:Colors[colorNames.editProfile.inputBackground],
        borderRadius:Metrics.borderRadiusStandard,
        color:Colors[colorNames.editProfile.text]
    },
    buttonContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:Metrics.width * 0.02,
        backgroundColor:Colors[colorNames.editProfile.buttonBackground],
        borderRadius:Metrics.borderRadiusStandard,
        color:Colors[colorNames.editProfile.text]
    },
});

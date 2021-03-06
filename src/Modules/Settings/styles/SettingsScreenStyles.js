import { StyleSheet } from 'react-native';

import { colorNames } from '../../Theming';
import { Fonts, Metrics } from '../../../StylingConstants';

export default Colors => StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:Colors[colorNames.settings.background],
        padding:Metrics.marginHorizontal,
        //padding: Metrics.marginHorizontal,
    },
    userContainer:{
        flex:0.3,
        justifyContent:'flex-start',
        alignItems:'flex-end',    
    },
    nameText:{
        color:Colors[colorNames.settings.userEmailText],
        marginVertical: Metrics.width * 0.02,
        fontFamily:Fonts.type.bold,
        fontSize:Fonts.size(16),
    },
    emailText:{
        color:Colors[colorNames.settings.userEmailText],
        marginBottom:Metrics.width *0.02,
        fontFamily:Fonts.type.regular,
        fontSize:Fonts.size(16)
    },
    buttonContainer:{
        flex:0.2,
        justifyContent:'flex-end',
    },
    signOutTouchable:{
        height: Metrics.boxNormalHeight,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Metrics.borderRadiusStandard,
        borderWidth: 2,
        borderColor: Colors[colorNames.settings.signOutButtonBorder],
        backgroundColor: Colors[colorNames.settings.signOutButtonBackground],
    },
    signOutText:{
        fontFamily:Fonts.type.semiBold,
        fontSize:Fonts.size(16),
        color:Colors[colorNames.settings.signOutButtonText],
    },
    updateProfile:{
        fontFamily:Fonts.type.bold,
        fontSize:Fonts.size(14),
        color:'red'
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer:{
        position:'absolute',
        left:Metrics.width * 0.01,
        top:Metrics.width *0.03,
        width:Metrics.width * 0.15,
        height:undefined,
        aspectRatio:1,
    },
    icon:{
        color:Colors[colorNames.header.background]
    }
});

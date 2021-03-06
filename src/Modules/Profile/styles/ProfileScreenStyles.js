import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import {colorNames} from '../../Theming';

export default Colors => StyleSheet.create({
    container: {
        //justifyContent:'space-around',
        alignItems: 'center',
        backgroundColor: Colors[colorNames.editProfile.background],
        flex: 1,
    },
    userContainer: {
        borderColor: Colors[colorNames.editProfile.yesNoButton],
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: Metrics.width * 0.03,
        margin: Metrics.width * 0.03,
        width: Metrics.width * 0.7,
        height: Metrics.width * 0.2,
        //aspectRatio:1,
        borderRadius:Metrics.borderRadiusFullRound,
        backgroundColor: 'transparent'
    },
    infoContainer: {
        borderColor: Colors[colorNames.editProfile.buttonBackground],
        borderWidth: 2,
        justifyContent:'center',
        alignItems: 'center',
        padding: Metrics.width * 0.03,
        margin: Metrics.width * 0.03,
        width: Metrics.width * 0.9,
        height: Metrics.width * 0.7,
        //aspectRatio: 1,
        borderRadius:Metrics.borderRadiusFullRound,
        backgroundColor: 'transparent'
    },
    infoHeader: {
        marginBottom: 10,
        color:Colors[colorNames.editProfile.text],
        fontFamily:Fonts.type.bold,
        fontSize:Fonts.size(16)
    },
    infoText: {
        marginVertical:5,
        color:Colors[colorNames.editProfile.text],
        fontFamily:Fonts.type.regular,
        fontSize:Fonts.size(16)
    },
    text: {
        //marginVertical:5,
        color:Colors[colorNames.editProfile.text],
        fontFamily:Fonts.type.semiBold,
        fontSize:Fonts.size(18)
    },
    iconContainer:{
        position:'absolute',
        top:Metrics.width * 0.03,
        right:Metrics.width * 0.04,
        width:Metrics.width *0.07,
        height:undefined,
        aspectRatio:1,
        //backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',

    },
    icon:{
        color:Colors[colorNames.header.background]
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    }

});

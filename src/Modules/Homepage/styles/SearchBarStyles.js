import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';

export default Colors=>StyleSheet.create({
    container:{
        backgroundColor:'yellow'
    },
    searchBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderColor:'black',
        borderWidth:1,
        margin:Metrics.width*0.03,
        marginHorizontal:Metrics.marginHorizontal,
        borderRadius:Metrics.borderRadiusStandard,
        backgroundColor:'transparent',
        paddingHorizontal:Metrics.marginHorizontal,
    },
    textInput:{
        flexShrink:1,
        flexGrow:0.7,
        paddingHorizontal:Metrics.width * 0.03,
        fontFamily:Fonts.type.regular,
        fontSize:Fonts.size(15),
    },
    iconContainer:{
        width:Metrics.width * 0.1,
        height:undefined,
        aspectRatio:1,
        //backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        padding:Metrics.width * 0.025,
    },
    icon:{
        color:'black'
    }
});

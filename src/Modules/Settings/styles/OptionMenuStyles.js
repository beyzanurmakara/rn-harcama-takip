import { StyleSheet } from 'react-native';

import { colorNames } from '../../Theming';
import { Fonts, Metrics } from '../../../StylingConstants';

export default Colors => StyleSheet.create({
    container:{
        paddingTop:Metrics.marginHorizontal,
        marginHorizontal:Metrics.width * 0.02,
    },
    titleText:{
        fontFamily:Fonts.type.semiBold,
        fontSize:Fonts.size(15),
        color:Colors[colorNames.settings.titleText]
    },
    optionTitleText:{
        fontFamily:Fonts.type.regular,
        fontSize:Fonts.size(15),
        color:Colors[colorNames.settings.radioButtonText],
    },
    optionTouchable:{
        flexDirection: 'row',
        marginTop: Metrics.width * 0.02,
        alignItems: 'center',
    },
    iconContainer:{
        width: Metrics.width * 0.04,
        height: undefined,
        aspectRatio: 1,
        marginRight: Metrics.width * 0.03,
    },
    iconStyle:{
        color:Colors[colorNames.settings.radioButtonUnselectedIcon]
    }
});

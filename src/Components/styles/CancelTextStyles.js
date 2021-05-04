import { StyleSheet } from 'react-native';

import { Fonts, Metrics } from '../../StylingConstants';
import { colorNames } from '../../Modules/Theming';

export default colors=>StyleSheet.create({
    cancelTextContainer:{
        position:'absolute',
        right:Metrics.width * 0.05,
        top:Metrics.width * 0.000001,
    },
    cancelText:{
        color:colors[colorNames.homePage.deleteButtonBackground],
        fontFamily:Fonts.type.extraBold,
        fontSize:Fonts.size(15),
    }
});

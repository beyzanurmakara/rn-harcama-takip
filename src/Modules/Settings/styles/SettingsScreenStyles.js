import { StyleSheet } from 'react-native';

import { colorNames } from '../../Theming';
import { Metrics } from '../../../StylingConstants';

export default Colors => StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:Colors[colorNames.settings.background],
        padding:Metrics.marginHorizontal,
        //padding: Metrics.marginHorizontal,
    },
    nameText:{
        color:Colors[colorNames.settings.userEmailText],
        marginBottom: Metrics.width * 0.01,
    },
    emailText:{
        color:Colors[colorNames.settings.userEmailText],
        marginBottom:Metrics.width *0.05,
    }
});

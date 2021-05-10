import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { colorNames } from '../../Theming';

export default Colors=>StyleSheet.create({
    container: {
        borderColor:Colors[colorNames.addNew.separator],
        borderWidth: 5,
        backgroundColor: Colors[colorNames.addNew.categoryListBackground],
        flexDirection: 'row',
        alignItems: 'center',
        padding: Metrics.width *0.03,
    },
    category: {
        borderBottomColor: Colors[colorNames.addNew.categoryItemBackground],
        borderBottomWidth: 1,
        padding: 5,
        margin: 5,
        borderRadius: 5,
    },
    itemText:{
        color:Colors[colorNames.addNew.categorylistText],
        fontFamily:Fonts.type.semiBold,
        fontSize:Fonts.size(14),
    }
});

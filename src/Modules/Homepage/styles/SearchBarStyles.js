import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';
import { colorNames } from '../../Theming';

export default Colors => StyleSheet.create({
    container: {
        backgroundColor: Colors[colorNames.homePage.background]
    },
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: Colors[colorNames.homePage.shoppingItemPriceText],
        borderWidth: 1,
        margin: Metrics.width * 0.03,
        marginHorizontal: Metrics.marginHorizontal,
        borderRadius: Metrics.borderRadiusStandard,
        backgroundColor: 'transparent',
        paddingHorizontal: Metrics.marginHorizontal,
        marginBottom: Metrics.width * 0.1,
    },
    textInput: {
        flexShrink: 1,
        flexGrow: 0.7,
        paddingHorizontal: Metrics.width * 0.03,
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size(15),
        color: Colors[colorNames.homePage.shoppingItemPriceText]
    },
    iconContainer: {
        width: Metrics.width * 0.1,
        height: undefined,
        aspectRatio: 1,
        //backgroundColor:'green',
        justifyContent: 'center',
        alignItems: 'center',
        padding: Metrics.width * 0.025,
    },
    icon: {
        color: Colors[colorNames.homePage.addButtonBackground]
    },
    refreshContainer: {
        position: 'absolute',
        right: Metrics.width * 0.07,//0.47
        top: Metrics.width * 0.2,
        width: Metrics.width * 0.05,
        height: undefined,
        aspectRatio: 1,
    },
    refresh: {
        color: Colors[colorNames.header.background]
    }
});

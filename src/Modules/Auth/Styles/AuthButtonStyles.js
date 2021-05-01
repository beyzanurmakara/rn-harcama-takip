import {StyleSheet} from 'react-native';
import {Fonts} from '../../../StylingConstants';
import { colorNames } from '../../Theming';

const styles = (Colors) => StyleSheet.create({
    touchable: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(16),
        color: Colors[colorNames.auth.coloredButtonText],
    },
});

export default styles;

import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import { setWarningCodeAC, warningSelector } from './WarningRedux';
import Icon from '../../Components/Icon';
import { useThemedColors, useThemedStyles, colorNames } from '../Theming';
import { Svgs } from '../../StylingConstants';

import getStyles from './styles/WarningManagerStyles';

const WarningManager = props => {

    const warning = useSelector(warningSelector);
    const [warnState, setWarnState] = useState(warning);

    let isVisible=warning.length!==0;
    const dispatch = useDispatch();

    const styles = useThemedStyles(getStyles);
    const colors=useThemedColors();

    const _onPress_OK=()=>{
        isVisible=false;
        dispatch(setWarningCodeAC(''));
        setWarnState('');
    }

    return (
        <Modal
            isVisible={isVisible}
            backdropColor={colors[colorNames.warning.modalBackdropColor]}
            style={styles.modal}
        >
            <View style={styles.warningTexContainer}>
                <Text style={styles.warningText}>
                    UYARI
                </Text>
            </View>
            <View style={styles.container}>
                <TextInput
                    numberOfLines={4}
                    multiline
                    value={warning}
                    editable={false}
                    style={styles.messageText} />
                <TouchableOpacity style={styles.buttonContainer} onPress={_onPress_OK}>
                    <Icon svg={Svgs.Okay} iconStyle={{ color: colors[colorNames.warning.iconColor] }} />
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default WarningManager;

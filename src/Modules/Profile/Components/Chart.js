import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useLocalization, Texts } from '../../Localization';
import { colorNames, useThemedColors } from '../../Theming';
import { Metrics, Fonts } from '../../../StylingConstants';

const Chart = props => {

    const profile = props.profile;
    console.log('PROFİLE >> ', profile);
    const [fill, setFill] = useState(profile.expense === 0 ? (profile.total * 100) / profile.income : (profile.total * 100) / profile.expense);

    const loc = useLocalization();
    const colors = useThemedColors();

    const styles = StyleSheet.create({
        infoText: {
            marginVertical: 5,
            color: colors[colorNames.editProfile.text],
            fontFamily: Fonts.type.regular,
            fontSize: Fonts.size(16)
        },
    });
    console.log(fill);
    return (
        <AnimatedCircularProgress
            size={300}
            width={4}
            fill={fill}
            tintColor={profile.total>profile.expense && profile.expense>0?colors[colorNames.homePage.deleteButtonBackground]: colors[colorNames.editProfile.buttonBackground]}
            backgroundColor={colors[colorNames.editProfile.yesNoButton]}>
            {
                (fill) => (
                    <>
                        {/* <Text style={styles.infoHeader}>{loc.t(Texts.informations).toUpperCase()}</Text> */}
                        <Text style={styles.infoText}>{loc.t(Texts.income)}: ₺{profile.income}</Text>
                        <Text style={styles.infoText}>{loc.t(Texts.expenseLimit)}:{profile.expense !== 0 ? '₺' + profile.expense : loc.t(Texts.notDetermined)}</Text>
                        <Text style={styles.infoText}>{loc.t(Texts.total)}: </Text>
                        <Text style={styles.infoText}>₺{profile.expense !== 0 ? (fill * profile.expense) / 100 : (fill * profile.income) / 100}</Text>
                    </>
                )
            }
        </AnimatedCircularProgress>
    );
};

export default Chart;

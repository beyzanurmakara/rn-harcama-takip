import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

import { useLocalization, Texts } from '../../Localization';
import { useThemedStyles } from '../../Theming';

import getStyles from '../styles/SettingsScreenStyles';

const SettingsScreen = props => {

    const styles = useThemedStyles(getStyles);

    const loc=useLocalization();

    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <Text style={styles.nameText}>
                    BEYZA NUR MAKARA
                </Text>
                <Text style={styles.emailText}>
                    beyzamakara@mail.com
                </Text>
                <View>
                    {/* burada option menu olacak */}
                    <TouchableOpacity>
                        <View>
                            <Text>
                                o
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>console.log("bastın!")}>
                    <Text>
                        {loc.t(Texts.signOut)}
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
};

export default SettingsScreen;

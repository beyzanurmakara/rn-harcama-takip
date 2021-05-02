import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet }  from 'react-native';
import  { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../Settings/Screens/SettingsScreen';
import HomepageScreen from '../Homepage/Screens/HomepageScreen';
import AddNewScreen from '../AddNew/Screens/AddNewScreen';
import { useThemedColors, colorNames, useThemedStyles } from '../Theming';
import { useLocalization, Texts } from '../Localization';

import SettingsIcon from './IconComponents/SettingsIcon';

import { TouchableOpacity, Text } from 'react-native';
import { Metrics, Svgs} from '../../StylingConstants';
import Icon from '../../Components/Icon';


const getStyles = Color => StyleSheet.create({
    iconContainer: {
        width: Metrics.width * 0.06,
        height: undefined,
        aspectRatio: 1,
        marginRight: Metrics.marginHorizontal,
    },
    icon: {
        color: Color[colorNames.header.rightIcon],
    }
})

const AppStack = createStackNavigator();


const AppNavigation = props => {

    const colors=useThemedColors();
    const loc=useLocalization();

    const styles = useThemedStyles(getStyles);
    //

    const _onPressRightIcon = () => {
        const navigation = useNavigation();
        navigation.navigator('settings-screen');
    }

    return (
        <AppStack.Navigator>
            <AppStack.Screen 
                name='homepage-screen'
                component={HomepageScreen}
                options={{
                    title: (loc.t(Texts.homePage)).toUpperCase(),
                    headerStyle:{
                        backgroundColor:colors[colorNames.header.background]
                    },
                    headerTitleAlign:'center',
                    headerTitleStyle:{
                        color: colors[colorNames.header.text]
                    },
                    headerRight :  SettingsIcon,
                }}
            />
            <AppStack.Screen 
                name='settings-screen'
                component={SettingsScreen}
                options={{
                    title: (loc.t(Texts.settings)).toUpperCase(),
                    headerStyle:{
                        backgroundColor:colors[colorNames.header.background]
                    },
                    headerTitleAlign:'center',
                    headerTitleStyle:{
                        color: colors[colorNames.header.text]
                    },
                    headerBackTitleVisible:false,
                    headerLeftContainerStyle:{
                        marginLeft:Metrics.marginHorizontal * 0.2,
                    },
                    headerTintColor:colors[colorNames.header.backIcon]
                   // headerLeft : BackIcon,
                }}
            />
            <AppStack.Screen 
                name='add-new-screen'
                component={AddNewScreen}
                options={{
                    title: (loc.t(Texts.addNew)).toUpperCase(),
                    headerStyle:{
                        backgroundColor:colors[colorNames.header.background]
                    },
                    headerTitleAlign:'center',
                    headerTitleStyle:{
                        color: colors[colorNames.header.text]
                    },
                    headerBackTitleVisible:false,
                    headerLeftContainerStyle:{
                        marginLeft:Metrics.marginHorizontal * 0.2,
                    },
                    headerTintColor:colors[colorNames.header.backIcon]
                   // headerLeft : BackIcon,
                }}
            />
            
        </AppStack.Navigator>
    );
};

export default AppNavigation;

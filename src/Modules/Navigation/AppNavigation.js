import React from 'react';
import  { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../Settings/Screens/SettingsScreen';
import HomepageScreen from '../Homepage/Screens/HomepageScreen';
import { useThemedColors, colorNames } from '../Theming';
import { useLocalization, Texts } from '../Localization';

const AppStack = createStackNavigator();

const AppNavigation = props => {

    const colors=useThemedColors();
    const loc=useLocalization();

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
                }}
            />
            
        </AppStack.Navigator>
    );
};

export default AppNavigation;

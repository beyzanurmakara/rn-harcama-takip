import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../Settings/Screens/SettingsScreen';

const DummyScreen = props => {
    return (
        <View>
            <Text>Deneme</Text>
        </View>
    );
}

const DummyStack = createStackNavigator();

const DummyNavigation = () => {
    return (
        <DummyStack.Navigator>
            <DummyStack.Screen
                // name="dummy-screen"
                // component={DummyScreen} />
                name="settings-screen"
                component={SettingsScreen} />
        </DummyStack.Navigator>
    );
};

export default DummyNavigation;

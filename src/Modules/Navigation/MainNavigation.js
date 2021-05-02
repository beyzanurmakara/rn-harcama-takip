import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';

const MainNavigation = (props) => {
    const loggedInUser = true;
    return (
        <NavigationContainer>
            {
                loggedInUser ?
                <AppNavigation/>
                :
                <AuthNavigation/>
            }
        </NavigationContainer>
    );
};

export default MainNavigation;

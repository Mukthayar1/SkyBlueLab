import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens

import Home from '../../screens/UserScreens/HomeScreens/Home';
const AuthNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default AuthNavigation
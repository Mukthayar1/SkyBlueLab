import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens

import Login from '../../screens/AuthScreens/Login/Login';

import BottomTabs from '../User'


const AuthNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
        </Stack.Navigator>
    )
}

export default AuthNavigation
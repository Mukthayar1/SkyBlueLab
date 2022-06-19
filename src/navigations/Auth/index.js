import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens

import Login from '../../screens/AuthScreens/Login/Login';

const AuthNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default AuthNavigation
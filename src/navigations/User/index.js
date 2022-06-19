import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Platform,View} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

//Screens
import Home from '../../screens/UserScreens/HomeScreens/Home';
import ReportsScreen from '../../screens/UserScreens/ReportsScreens/Reports';
import SettingScreen from '../../screens/UserScreens/SeetingScreens/SettingScreen';

const AuthNavigation = () => {
    const Tab = createBottomTabNavigator();


    const screenOptions = {
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#FAF9F9',
        tabBarShowLabel: true,

        tabBarIconStyle: {
            paddingBottom: Platform.OS === 'android' || model === 'iPhone 8' ? 5 : 10,
        },

        tabBarStyle: {

            height:70,
            backgroundColor:  '#2b2a7e',
            borderTopLeftRadius:25,
            borderTopRightRadius:25,
            position: 'absolute',
            borderTopWidth: 0,
            shadowColor: 'rgb(5, 7, 22)',
            shadowOffset: {
                width: 0,
                height: -5,
            },
            shadowOpacity: 0.06,
            shadowRadius: 19,
            elevation: 5,

        },
        

    };

    return (
        <Tab.Navigator screenOptions={screenOptions} tabBarStyle={{backgroundColor:'red'}}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="ReportsScreen" component={ReportsScreen} />
            <Tab.Screen name="SettingScreen" component={SettingScreen} />
        </Tab.Navigator>
    )
}

export default AuthNavigation
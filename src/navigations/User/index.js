import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, Image, StyleSheet, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

//Screens
import Home from '../../screens/UserScreens/HomeScreens/Home';
import ReportsScreen from '../../screens/UserScreens/ReportsScreens/Reports';
import SettingScreen from '../../screens/UserScreens/SeetingScreens/SettingScreen';

import { Reports, Logo, Seetings } from '../../constants/images';

const AuthNavigation = () => {

    const ActiveIcon = ({ img }) => (
        <Image style={styles.ActiveImage} source={img} resizeMode={'contain'} />
    );
    const UnActiveIcon = ({ img }) => (
        <Image style={styles.UnActiveImage} source={img} resizeMode={'contain'} />
    );


    const Tab = createBottomTabNavigator();




    const screenOptions = route => ({
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#FAF9F9',

        tabBarShowLabel: false,
        tabBarIconStyle: {
            paddingBottom: Platform.OS === 'android' || model === 'iPhone 8' ? 5 : 10,
        },

        tabBarStyle: {
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            backgroundColor: '#2b2a7e',
            height: Platform.OS === 'android' || model === 'iPhone 8' ? 65 : 85,
            position: 'absolute',
        },
    });


    return (
        <Tab.Navigator screenOptions={screenOptions} initialRouteName={'Home'} tabBarStyle={{ backgroundColor: '#fff' }}>
            <Tab.Screen name="ReportsScreen" component={ReportsScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <>
                                {focused ? (
                                    <>
                                        <ActiveIcon img={Reports} />
                                        <Text style={styles.activetext}>Reports</Text>
                                    </>
                                ) : (
                                    <>
                                        <UnActiveIcon img={Reports} />
                                        <Text style={styles.unactivetext}>Reports</Text>
                                    </>
                                )}
                            </>
                        );
                    },
                }}
            />
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <>
                                {focused ? (
                                    <>
                                        <ActiveIcon img={Logo} />
                                        <Text style={styles.activetext}>Home</Text>
                                    </>
                                ) : (
                                    <>
                                        <UnActiveIcon img={Logo} />
                                        <Text style={styles.unactivetext}>Home</Text>
                                    </>
                                )}
                            </>
                        );
                    },
                }}
            />
            <Tab.Screen name="SettingScreen" component={SettingScreen} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <>
                            {focused ? (
                                <>
                                    <ActiveIcon img={Seetings} />
                                    <Text style={styles.activetext}>Setting</Text>
                                </>
                            ) : (
                                <>
                                        <UnActiveIcon img={Seetings} />
                                        <Text style={styles.unactivetext}>Setting</Text>
                                    </>
                            )}
                        </>
                    );
                },
            }} />
        </Tab.Navigator>
    )
}

export default AuthNavigation;


const styles = StyleSheet.create({
    ActiveImage: { height: 30, width: 30, tintColor: '#fff' },
    UnActiveImage: { height: 30, width: 30, tintColor: '#AAB7B8' },
    MainIcon: { height: 80, width: 80, marginTop: -50 },
    activetext: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
    unactivetext:{ color:'#AAB7B8', fontSize: 13, fontWeight: 'bold' },
});

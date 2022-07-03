import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView, ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import styles from './style';
import { Logo, User } from '../../../constants/images';

export default function Login({ props }) {

    const [email, setemail] = useState();
    const [name, setname] = useState();
    const [contact, setcontact] = useState();
    const [age, setage] = useState();
    const [pass, setpass] = useState();
    const navigation = useNavigation();
    const [loading, Setloading] = useState(false)



    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.ScollContainer}>
            <View>

                <View style={styles.loginHeader}>
                    <Image source={Logo} style={styles.logo} resizeMode={'contain'} />
                    <Text style={styles.textblue}>Sky Blue Labs</Text>
                    <View style={styles.row}>
                        <View style={styles.lines} />
                        <Text style={styles.textgreen}>Research & Diagnoses</Text>
                        <View style={styles.lines} />
                    </View>
                </View>

                <View style={{ marginTop: 20 }} />

                <View style={styles.inputcontainer}>
                    <TextInput value={email} keyboardType={'email-address'}
                        onChangeText={(e) => setemail(e)} placeholder={'Email Address'}
                        style={styles.input} />
                </View>

                <View style={styles.inputcontainer}>
                    <TextInput value={name} onChangeText={(e) => setname(e)} placeholder={'Full Name'}
                        style={styles.input} />
                </View>

                <View style={styles.inputcontainer}>
                    <TextInput value={contact}
                        keyboardType={'phone-pad'}
                        onChangeText={(e) => setcontact(e)} placeholder={'Contact No'}
                        style={styles.input} />
                </View>

                <View style={styles.inputcontainer}>
                    <TextInput maxLength={2}
                        keyboardType={'phone-pad'} value={age} onChangeText={(e) => setage(e)} placeholder={'Age'}
                        style={styles.input} />
                </View>

                <View style={styles.inputcontainer}>
                    <TextInput value={pass} onChangeText={(e) => setpass(e)} placeholder={'Password'}
                        secureTextEntry={true}
                        style={styles.input} />
                </View>




                {loading == true ?
                    <TouchableOpacity >
                        <LinearGradient colors={['#ECF0F1', '#ECF0F1', '#fff']}
                            style={styles.btn}>
                            <ActivityIndicator size={'large'} color={'#2b2a7e'} animating={true} />
                        </LinearGradient>
                    </TouchableOpacity>
                    :

                    <TouchableOpacity>
                        <LinearGradient colors={['#ECF0F1', '#ECF0F1', '#fff']}
                            style={styles.btn}>
                            <Text style={[styles.textblue, { fontSize: 17, color: '#2b2a7e' }]}>Register</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                }

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <LinearGradient colors={['#ECF0F1', '#ECF0F1', '#fff']}
                        style={styles.btn}>
                        <Text style={[styles.textblue, { fontSize: 17, color: '#2b2a7e' }]}>Login</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <Text style={styles.textforgot}>Forgotten Password ?</Text>

            </View>
        </ScrollView>
    )
}

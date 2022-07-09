import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView, ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { useDispatch } from 'react-redux';

import styles from './style';
import { Logo, User } from '../../../constants/images';
import { LoginUser } from './Logining';

import Modal from '../../../components/AlertModal/Modal'

export default function Login({ props }) {

    const [email, setemail] = useState('khanadil1000s@gmail.com');
    const [pass, setpass] = useState('12345A');
    const [errMsg, SetErrorMsg] = useState();
    const [ShowError, SetShowError] = useState(false);
    const [loading, Setloading] = useState(false);

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const LoginUserFun = () => {
        LoginUser(email, pass, navigation, Setloading, SetErrorMsg, SetShowError,dispatch)
    }



    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.loginHeader}>
                    <Image source={Logo} style={styles.logo} resizeMode={'contain'} />
                    <Text style={styles.textblue}>Sky Blue Labs</Text>
                    <View style={styles.row}>
                        <View style={styles.lines} />
                        <Text style={styles.textgreen}>Research & Diagnoses</Text>
                        <View style={styles.lines} />
                    </View>
                </View>

                <View style={styles.loginbody}>
                    <View style={styles.circle}>
                        <Image source={User} style={styles.userlogo} resizeMode={'contain'} />
                    </View>

                    <View style={{ marginTop: 20 }} />

                    <View style={styles.inputcontainer}>
                        <TextInput value={email} onChangeText={(e) => setemail(e)} placeholder={'Email or user id'}
                            style={styles.input} />
                    </View>

                    <View style={styles.inputcontainer}>
                        <TextInput value={pass} onChangeText={(e) => setpass(e)} placeholder={'Password'}
                            secureTextEntry={true}
                            style={styles.input} />
                    </View>


                    <Modal SetShow={SetShowError} ShowValue={ShowError} Msg={errMsg} />

                    {loading == true ?

                        <TouchableOpacity >
                            <LinearGradient colors={['#ECF0F1', '#ECF0F1', '#979A9A']}
                                style={styles.btn}>
                                <ActivityIndicator size={'large'} color={'#2b2a7e'} animating={true} />
                            </LinearGradient>
                        </TouchableOpacity>


                        :
                        <TouchableOpacity onPress={() => LoginUserFun()}>
                            <LinearGradient colors={['#ECF0F1', '#ECF0F1', '#979A9A']}
                                style={styles.btn}>
                                <Text style={[styles.textblue, { fontSize: 22 }]}>Login</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    }

                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <LinearGradient colors={['#ECF0F1', '#ECF0F1', '#979A9A']}
                            style={styles.btn}>
                            <Text style={[styles.textblue, { fontSize: 22 }]}>Register</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <Text style={styles.textforgot}>Forgotten Password ?</Text>
                </View>
            </View>

        </ScrollView>
    )
}

import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import styles from './style';
import { Logo, User } from '../../../constants/images';

export default function Login({ props }) {

    const [email, setemail] = useState();
    const [pass, setpass] = useState();
    const navigation = useNavigation();

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


                    <TouchableOpacity onPress={() => navigation.navigate('BottomTabs')}>
                        <LinearGradient colors={['#ECF0F1', '#ECF0F1', '#979A9A']}
                            style={styles.btn}>
                            <Text style={[styles.textblue, { fontSize: 22 }]}>Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity>
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

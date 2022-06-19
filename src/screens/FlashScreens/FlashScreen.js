import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';

import { Logo } from '../../constants/images';
import { COLORS, SIZES } from '../../constants/theme';

export default function FlashScreen() {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.image} resizeMode={'contain'} />
            <Text style={styles.promotext}>آپ یونیورسل نمبر</Text>
            <Text style={styles.promotext2}>UAN 03-111-355-553</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    image: {
        height: SIZES.height * 0.4,
    },
    promotext:{
        fontSize:30,
        color:'#000',
        fontWeight:'bold'
    },
    promotext2:{
        fontSize:22,
        color:'#000',
        fontWeight:'bold'
    }
})

import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../../../constants/theme'
import StatusBarHeight from '../../../constants/Statusbarheight'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    loginHeader: {
        paddingTop: StatusBarHeight,
        justifyContent: 'center',
        alignItems: 'center',
        height: SIZES.height / 2.6,
    },
    logo: {
        height: (SIZES.height / 3) * 0.6,
    },
    textblue: {
        fontSize: 30,
        color: '#2b2a7e',
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        marginBottom:5,
        alignItems: 'center'
    },
    lines: {
        width: '7%',
        height: 2,
        backgroundColor: '#009c43'
    },
    textgreen: {
        fontSize: 17,
        color:'#009c43',
        fontWeight: 'bold',
        marginLeft:5,
        marginRight:5,
    },
    loginbody:{
        height:(SIZES.height - SIZES.height / 2.6) ,
        backgroundColor:  '#2b2a7e',
    },
    userlogo:{
        height:60,
        alignSelf:'center',
        tintColor: '#2b2a7e',
    },
    circle:{
        alignSelf:'center',
        justifyContent:'center',
        padding:10,
        width:'25%',
        height:90,
        backgroundColor:'#fff',
        marginTop:20,
        borderRadius:60
    },
    inputcontainer:{
        backgroundColor:'#fff',
        width:'80%',
        marginTop:10,
        alignSelf:'center',
        borderRadius:10,
        minHeight:50
    },
    input:{
        minHeight:50,
        paddingLeft:10
    },
    btn:{
        width:'40%',
        marginTop:10,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        height:50,
    },
    textforgot:{
        color:'#979A9A',
        marginTop:20,
        alignSelf:'center'
    }
})

export default styles
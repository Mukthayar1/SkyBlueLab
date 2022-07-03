import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../../../constants/theme'
import StatusBarHeight from '../../../constants/Statusbarheight'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display:'flex',
        backgroundColor:  '#2b2a7e',
    },
    ScollContainer:{
        justifyContent:'center',
        // alignItems:'center'
    },
    loginHeader: {
        paddingTop: StatusBarHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: (SIZES.height / 3) * 0.4,
    },
    textblue: {
        fontSize: 17,
        color: '#fff',
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
        backgroundColor: '#fff'
    },
    textgreen: {
        fontSize: 15,
        color:'#fff',
        fontWeight: 'bold',
        marginLeft:5,
        marginRight:5,
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
        height:40,
    },
    textforgot:{
        color:'#979A9A',
        marginTop:20,
        alignSelf:'center'
    }
})

export default styles
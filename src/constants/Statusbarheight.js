import { StatusBar, Platform, NativeModules } from "react-native"
const { StatusBarManager } = NativeModules;




let StatusBarHeight = Platform.select({
    ios: StatusBarManager.HEIGHT,
    android: StatusBar.currentHeight,
    default: 0
})



export default StatusBarHeight

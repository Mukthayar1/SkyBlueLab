import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'

import NavigationContainer from './src/navigations/NavigationContainer'
import FlashScreen from './src/screens/FlashScreens/FlashScreen'

function App() {
  const [loading, SetLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      SetLoading(true)
    }, 2000)
  }, [])
  return (
    <>
      <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />

      {loading === true ?
        <NavigationContainer />
        :
        <FlashScreen />}
    </>
  )
}

export default App
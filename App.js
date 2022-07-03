import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import NavigationContainer from './src/navigations/NavigationContainer';
import FlashScreen from './src/screens/FlashScreens/FlashScreen';
import { persistor, store } from './src/store/store';


function App() {
  const [loading, SetLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      SetLoading(true)
    }, 2000)
  }, [])
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar translucent backgroundColor={'transparent'} barStyle={'dark-content'} />

        {loading === true ?
          <NavigationContainer />
          :
          <FlashScreen />}
      </PersistGate>
    </Provider>
  )
}

export default App
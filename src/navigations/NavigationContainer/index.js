import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigation from '../Auth';
import UserNavigation from '../User'

export default function index() {
  return (
   <>
    <NavigationContainer>
        <AuthNavigation/>
        {/* <UserNavigation/> */}
    </NavigationContainer>
   </>
  )
}

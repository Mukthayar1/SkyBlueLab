import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import AuthNavigation from '../Auth';
import UserNavigation from '../User'

export default function index() {

  const LoginUserIs = useSelector((statae) => statae?.LoginUserIs);
  console.log('LoginUserIs===>', LoginUserIs)

  return (
    <>
      <NavigationContainer>
        {LoginUserIs != true ?
          <AuthNavigation />
          :
          <UserNavigation />
        }
      </NavigationContainer>
    </>
  )
}

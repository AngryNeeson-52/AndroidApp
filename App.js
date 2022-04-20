
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './screens/LoginPage';
import SignupPage from './screens/SignupPage';
import GameCoroutine from './GameCoroutine'

export default function App() {
  return(
    GameCoroutine()
  )
}

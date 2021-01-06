import React, { Component, Suspense, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Touchable, FlatList } from 'react-native';
// import * as Font from 'expo-font'
import {enableScreens} from 'react-native-screens'


import MealsNavigator from './navigation/MealsNavigator'

// const fetshFonts = () => {
//   return Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   });
// };



export default function App() {

  // useEffect(() => {
  //   fetshFonts();  
  //   }, [])

  enableScreens();

  return <MealsNavigator/>
    
}


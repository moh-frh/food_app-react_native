import React, { Component, Suspense, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Touchable, FlatList } from 'react-native';
import {enableScreens} from 'react-native-screens'
import MealsNavigator from './navigation/MealsNavigator'

import {createStore, combineReducers} from 'redux'
import mealsReducer from './store/reducers/meals'
import {Provider} from 'react-redux'

const rootReducers = combineReducers({
  meals: mealsReducer
});

const store = createStore(rootReducers);

export default function App() {
  enableScreens();

  return (
          <Provider store={store}>
            <MealsNavigator/>
          </Provider>
         )
    
}


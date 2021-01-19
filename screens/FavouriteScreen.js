import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MealList from '../components/MealList'
import { CATEGORIES, MEALS } from '../data/meals_data';
import {useSelector} from 'react-redux'



const FavouriteScreen = props => {
    
    // const catId = props.navigation.getParam('categoryId');
  const favMeals = useSelector(state => state.meals.favouriteMeals);

        return (
            <MealList displayedMeals={favMeals} navigation={props.navigation} />
        )
};

export default FavouriteScreen

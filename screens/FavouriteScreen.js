import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MealList from '../components/MealList'
import { CATEGORIES, MEALS } from '../data/meals_data';


const FavouriteScreen = props => {
    
    // const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(
        meal => meal.id === 'm1' || meal.id === 'm2' 
    );

        return (
            <MealList displayedMeals={displayedMeals} navigation={props.navigation} />
        )
};

export default FavouriteScreen

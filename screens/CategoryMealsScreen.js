import React from 'react';
import {useSelector} from 'react-redux'
import { View, Text, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data/meals_data';
import MealList from '../components/MealList'


const CategoryMealScreen = props => {

  const availiableMeals = useSelector(state => state.meals.filteredMeals);
  

  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = availiableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <MealList displayedMeals={displayedMeals} navigation={props.navigation} />
  );
};

////// header text ////////////
CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
 
  return { 
    headerTitle: selectedCategory.title
  };
};



export default CategoryMealScreen;

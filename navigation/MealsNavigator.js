import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'

import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import Colors from '../constants/Colors'
import FavouriteScreen from '../screens/FavouriteScreen'
import {Ionicons} from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { Platform } from 'react-native';


const MealsNavigator = createStackNavigator({
    Categories: { screen: CategoriesScreen,
                  navigationOptions: {
                      headerStyle : { backgroundColor: Colors.primaryColor },
                      headerTintColor: 'white',
                  }   
                },

    CategoryMeals: { screen: CategoryMealsScreen, },
    MealDetail: { screen: MealDetailScreen, },
},
{ /////// this is for all pages ////////// 
    defaultNavigationOptions:{
        // headerTintColor: 'green',
    }
}
);

// const MealFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator ({
const MealFavTabNavigator = createMaterialBottomTabNavigator ({
    Meals: { screen: MealsNavigator, navigationOptions: {   
        tabBarIcon: (tabInfo) => {
            return <Ionicons name="restaurant-outline" size={24} color={tabInfo.tintColor} />
        },
        tabBarColor: Colors.primaryColor,
    } },

    Favourite: { screen: FavouriteScreen, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <MaterialIcons name="favorite-outline" size={24} color={tabInfo.tintColor} />
        },
        tabBarColor: Colors.accesntColor,

    } },

},
{
    ////// when i click it move to up /////////////////
    shifting: true,
},
{
    tabBarOptions: {
        activeTintColor: '#FFF',
        activeBackgroundColor: '#F4511e',

        keyboardHidesTabBar: false, 
        tabStyle: {
            backgroundColor: '#F4511E'
        },
        labelStyle:{
            fontSize: 18,
        }
    }
}
);

export default createAppContainer(MealFavTabNavigator);

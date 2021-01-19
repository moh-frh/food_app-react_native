import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import MealItem from './MealItem';
import {useSelector} from 'react-redux'



const MealList = (props) => {
  
  const checkFavEmpty = useSelector(state => state.meals.favouriteMeals);

    const renderMealItem = itemData => {
      
      
        return (
          <MealItem
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            onSelectMeal={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail', 
                    params: {
                      categoryId: itemData.item.id,
                      mealTitle: itemData.item.title
                    }
                  });
            }}
          />
        );
      
        
      };

      if(checkFavEmpty.length === 0 || !checkFavEmpty)
      {
        return (
              <View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
                <Text>
                  vide !!!!
                </Text>
              </View>
        )
      }
      else{
        return (
          <View style={styles.list}>
              <FlatList
                  data={props.displayedMeals}
                  keyExtractor={(item, index) => item.id}
                  renderItem={renderMealItem}
                  style={{ width: '100%' }}
              />
          </View>
        )
      }

    
}

const styles = StyleSheet.create({
    list: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15
    }
  });

export default MealList

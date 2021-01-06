import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Icon } from "react-native-elements";
import SvgIcon from '@material-ui/core/SvgIcon';

import { MEALS } from '../data/meals_data';
import HeaderButton from '../components/HeaderButton';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('categoryId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Icon>add_circle</Icon>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
}; 

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('categoryId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => 
      <View >
        <Icon type="ionicon" name="ios-heart" onPress={() => console.log("click de-favour")}/>
        <Icon type="ionicon" name="ios-heart" onPress={() => console.log("click favour")} />
      </View>
    
    
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen;

import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Icon } from "react-native-elements";

import { MEALS } from '../data/meals_data';
import HeaderButton from '../components/HeaderButton';
import { ScrollView } from 'react-native-gesture-handler';

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

  const [Fav, setFav] = useState(false)

  const toggleFav = () => {
    setFav(previousState => !previousState)
  }

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />

      <View style={ styles.details }>
        <Text>{selectedMeal.duration}m</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
      </View>

      <View style={styles.screen}>
        <Text style={styles.title}> Ingerediants </Text>
        {selectedMeal.ingredients.map(ing => (
          <Text key={ing} style={styles.list}> {ing} </Text>
        ))}

        <Text style={ styles.title }> Steps </Text>
        {selectedMeal.steps.map(step => (
          <Text key={step} style={styles.list}> {step} </Text>
        ))}

        <Button
          title="Go Back to Categories"
          onPress={() => {
            props.navigation.popToTop();
          }}
        />
      </View>
    </ScrollView>
  );
}; 

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('categoryId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => 
      <View >
        {/* <Icon type="ionicon" name="ios-heart" onPress={() => console.log("click de-favour")}/> */}
        <Icon type="ionicon" name="ios-heart"  />
      </View>
    
    
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  list:{
    width: '90%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
  }
});

export default MealDetailScreen;

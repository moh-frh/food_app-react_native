import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const FilterScreen = props => {

  const [isGlutineFree, setIsGlutineFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isSugar, setIsSugar] = useState(false);

  const toggleSwitchGlutineFree = () => setIsGlutineFree(previousState => !previousState);
  const toggleSwitchLactoseFree = () => setIsLactoseFree(previousState => !previousState);
  const toggleSwitchVegetarian = () => setIsVegetarian(previousState => !previousState);
  const toggleSwitchSugar = () => setIsSugar(previousState => !previousState);

  const saveFilters = useCallback(() => {
      const appliedFilters = {
        isGlutineFree: isGlutineFree,
        isLactoseFree: isLactoseFree,
        isVegetarian: isVegetarian,
        isSugar: isSugar,
      };
      console.log(appliedFilters);
    },[isGlutineFree, isLactoseFree, isVegetarian, isSugar]);
  

  useEffect(() => {
    props.navigation.setParams({save: saveFilters});
    
  }, [saveFilters])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Availible filters / restrictions</Text>

            <View style={styles.filterContainer}>
                <Text>Gluten-free</Text>
                <Switch
                  style={styles.container}
                  trackColor={{ false: "#767577", true: "#f5aa4b" }}
                  thumbColor={isGlutineFree ? "#f5aa4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitchGlutineFree}
                  value={isGlutineFree}
                />
            </View>

            <View style={styles.filterContainer}>
                <Text>Lactose-free</Text>
                <Switch
                  style={styles.container}
                  trackColor={{ false: "#767577", true: "#f5dd4b" }}
                  thumbColor={isLactoseFree ? "#f5dd4b" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitchLactoseFree}
                  value={isLactoseFree}
                />
            </View>

            <View style={styles.filterContainer}>
                <Text>Vegetarian-free</Text>
                <Switch
                  style={styles.container}
                  trackColor={{ false: "#767577", true: "#81ff00" }}
                  thumbColor={isVegetarian ? "#81ff00" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitchVegetarian}
                  value={isVegetarian}
                />
            </View>

            <View style={styles.filterContainer}>
                <Text>Sugar-free</Text>
                <Switch
                  style={styles.container}
                  trackColor={{ false: "#767577", true: "#81b0ff" }}
                  thumbColor={isSugar ? "#81b0ff" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitchSugar}
                  value={isSugar}
                />
            </View>

        </View>
    )
}

FilterScreen.navigationOptions = (navData) => {

    return{
    headerTitle: 'filter screen',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="menu" iconName='ios-menu' onPress={() => { navData.navigation.toggleDrawer(); }} />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="save" iconName='ios-save' onPress={navData.navigation.getParam('save')} />
      </HeaderButtons>
    )
  }};
  
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: 'center',
      marginTop: '10%',
    },
    title: {
      fontSize: 22,
      marginBottom: '5%',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    filterContainer: {
      flexDirection: 'row',
      width: '80%',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '5%'
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  });

export default FilterScreen

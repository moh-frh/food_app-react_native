import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class FiltersScreen extends Component {
    render() {
        return (
            <View style={styles.screen}>
                <Text> filterrs screen </Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    screen:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default FiltersScreen

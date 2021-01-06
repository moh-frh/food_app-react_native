import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'

const CategoryGridTile = props => {
    return (
            <View style={styles.gridItem}>
                <TouchableNativeFeedback
                    style={{ flex:1 }}
                    onPress={props.onSelect}>
                        <View style={{ ...styles.container, backgroundColor: props.color }}>
                            <Text style={{ ...styles.title }} numberOfLines={2}>{props.title}</Text>
                        </View>
                </TouchableNativeFeedback>
            </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    container:{
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    title:{
        fontFamily: "OpenSans-Bold",
        fontSize: 22,
    }
})



export default CategoryGridTile

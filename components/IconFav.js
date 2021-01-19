import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from "react-native-elements";


const IconFav = ({type, name, onPress}) => {
    return (
        <View>
            <Icon type={type} name={name}  onPress={onPress} style={{ marginRight: '10%' }} />
        </View>
    )
}

const styles = StyleSheet.create({
    
    });

export default IconFav

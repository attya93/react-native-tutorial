import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const OneScreen = () => {
    const nameing = "Mohammed"
    return (
        <View>
            <Text style={styles.textStyle}>Getting Started with React Native</Text>
            <Text style={styles.textTwo}>My Name is {nameing} </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    textTwo: {
        fontSize: 20
    }
})

export default OneScreen
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const CounterScreen = () => {
    let [counter, setCounter] = useState(0);
    return (
        <View>
            <Text>Current Count:</Text>
            <Button title="increase" onPress={() => { setCounter(++counter) }} />
            <Button title="decrease" onPress={() => { setCounter(--counter) }} />
            <Text>Counter : {counter}</Text>
        </View>
    )
}

export default CounterScreen

const styles = StyleSheet.create({})

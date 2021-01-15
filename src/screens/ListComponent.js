import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const ListComponent = () => {
    const friends = [
        { name: "friend #1", age: 20 },
        { name: "friend #2", age: 45 },
        { name: "friend #3", age: 32 },
        { name: "friend #4", age: 27 },
        { name: "friend #5", age: 53 },
        { name: "friend #6", age: 30 }
    ]
    return (
        <View style={styles.mainVewi}>
            <FlatList
                keyExtractor={(friend) => friend.name}
                data={friends}
                renderItem={({ item }) => {
                    return <Text style={styles.textStyle}>{item.name} - Age:{item.age}</Text>
                }} />
        </View>
    )
}

export default ListComponent

const styles = StyleSheet.create({
    mainVewi: {
        margin: 10
    },
    textStyle: {
        borderWidth: 1,
        padding: 15
    }
})

import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ImageDetails from '../components/ImageDetails'

const ImageScreen = () => {
    const listOfPlace = [
        { title: "Forest", img: require('../../assets/beach.jpg'), score: 9 },
        { title: "Beach", img: require("../../assets/forest.jpg"), score: 7 },
        { title: "Mountain", img: require("../../assets/mountain.jpg"), score: 4 },
    ]
    return (
        <View>
            <FlatList
                keyExtractor={(item) => item.title}
                data={listOfPlace}
                renderItem={({ item }) => {
                    return <ImageDetails title={item.title} img={item.img} score={item.score} />
                }}
            />
        </View>
    )
}

export default ImageScreen

const styles = StyleSheet.create({})

import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ImageDetails = ({ title, img, score }) => {
    return (
        <View>
            <Image source={img} />
            <Text>Image Details {title}</Text>
            <Text>Image Score - {score}</Text>
        </View>
    )
}

export default ImageDetails

const styles = StyleSheet.create({})

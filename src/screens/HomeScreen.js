import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Mohammed App</Text>
      <Button title="Go to One Screen" onPress={() => navigation.navigate('Components')} />
      <Button title="Go to List Screen" onPress={() => navigation.navigate('List')} />
      <Button title="Go to Image Screen" onPress={() => navigation.navigate('Image')} />
      <Button title="Go to Counter Screen" onPress={() => navigation.navigate('Counter')} />

    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

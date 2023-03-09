import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigation.navigate('FlatlistScreen1')}
        title="Go to list of Persons"
      />
      <Button
        title="Go to List of language"
        onPress={() => navigation.navigate('FlatlistScreen2')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomePage;
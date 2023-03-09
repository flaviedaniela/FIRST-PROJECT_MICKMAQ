/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HomePage from './src/screens/HomePage';
//import FlatlistScreen1 from './src/screens/FlatlistScreen1';
//import FlatlistScreen2 from './src/screens/FlatlistScreen2';



export default function App() {
  return (
    <View>
      <HomePage/>      
    </View>
  );
}
*/

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './src/screens/HomePage';
import FlatlistScreen1 from './src/screens/FlatlistScreen1';
import FlatlistScreen2 from './src/screens/FlatlistScreen2';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="FlatlistScreen1" component={FlatlistScreen1} />
        <Stack.Screen name="FlatlistScreen2" component={FlatlistScreen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
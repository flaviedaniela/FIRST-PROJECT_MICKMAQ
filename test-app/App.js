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

import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/screens/HomePage';
import FlatlistScreen1 from './src/screens/FlatlistScreen1';
import FlatlistScreen2 from './src/screens/FlatlistScreen2';

const Stack = createStackNavigator();

const App=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Notifications" component={FlatlistScreen1} />
      <Stack.Screen name="Profile" component={FlatlistScreen2} />

    </Stack.Navigator>
  );
};
export default App;
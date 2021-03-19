/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import OnboardScreen from './src/views/screens/OnboardScreen';
 import HomeScreen from './src/views/screens/HomeScreen';
 import DetailsScreen from './src/views/screens/DetailsScreen';
 const Stack = createStackNavigator();

 const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='OnboardScreen' component={OnboardScreen} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

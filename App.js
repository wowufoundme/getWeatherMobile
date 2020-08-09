import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchCity from './src/components/SearchCity';
import WeatherScreen from './src/components/WeatherScreen';
import Header from './src/components/Header';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: (props) => <Header title="Get Weather" /> }}>
        <Stack.Screen name="SearchCity" component={SearchCity} params={"Hello world"}/>
        <Stack.Screen name="WeatherScreen" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
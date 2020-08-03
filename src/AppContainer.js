import React from 'react';
import { View, Text } from 'react-native';

import Header from './components/Header';

const AppContainer = () => {
  return (
    <View>
      <Header title='Get Weather'/>
      <Text>Get Weather</Text>
    </View>
  )
}

export default AppContainer;
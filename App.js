import React from 'react';
import { ScrollView, Text } from 'react-native';

import Header from './src/components/Header';

const App = () => {
  return (
    <ScrollView>
      <Header title='Get Weather'/>
    </ScrollView>
  )
}

export default App;
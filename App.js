import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import fetchData from './src/api/fetchData';

import Header from './src/components/Header';
import Input from './src/components/Input';

const App = () => {

  const [ city, setCity ] = useState('');
  const [ cityData, setCityData ] = useState({});
  const [ displayData, setDisplayData ] = useState(false);
  
  const getData = async (city='delhi') => {
      const data = await fetchData(city);
      setCityData(data);
      setDisplayData(true);
      setCity('');
  }

  const clearData = () => {
      setCity('');
      setDisplayData(false);
  }

  const { primaryContainer } = styles;

  return (
    <ScrollView contentContainerStyle={primaryContainer}>
      <Header title='Get Weather' />
      <Input city={city} setCity={setCity} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  primaryContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#F4F5FB'
  }
})

export default App;
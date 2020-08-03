import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

import fetchData from './src/api/fetchData';

import Header from './src/components/Header';
import Input from './src/components/Input';
import WeatherCard from './src/components/WeatherCard';

const App = () => {

  const [ city, setCity ] = useState('');
  const [ cityData, setCityData ] = useState({});
  const [ displayData, setDisplayData ] = useState(false);
  
  const getData = async (city='delhi') => {
    const data = await fetchData(city);
    setCityData(data);
    setDisplayData(true);
    setCity('');
    console.log('fetched data...')
  }

  const clearData = () => {
      setCity('');
      setDisplayData(false);
  }

  const { primaryContainer } = styles;

  return (
    <ScrollView contentContainerStyle={primaryContainer}>
      <Header title='Get Weather' />
      <Input city={city} setCity={setCity} getData={getData} />
      <View style={{ width: '100%' }}>
        { displayData && <WeatherCard data={cityData} /> }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  primaryContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F4F5FB'
  }
})

export default App;
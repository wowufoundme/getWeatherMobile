import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, View, Alert } from 'react-native';

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
    if (!data) {
      Alert.alert('City Not Found!');
      setCity('');
    } else if (data) {
      setCityData(data);
      setDisplayData(true);
      setCity('');
    }
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F4F5FB'
  }
})

export default App;
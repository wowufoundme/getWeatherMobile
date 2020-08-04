import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, View, Alert, Image } from 'react-native';

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

  const { 
    primaryContainer, 
    imageBackground
  } = styles;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={primaryContainer}>
        <Header title='Get Weather' />
        <Input city={city} setCity={setCity} getData={getData} />
        <Image style={imageBackground} source={require('./assets/images/opti.png')} />
        <View style={{ width: '100%' }}>
          { displayData && <WeatherCard data={cityData} /> }
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  primaryContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F4F5FB',
    flexGrow: 1,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: -1
  }
})

export default App;
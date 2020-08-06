import React, { useState } from 'react';
import {  
  StyleSheet, 
  View, 
  Alert,
  Dimensions,
  Image,
  Text
} from 'react-native';

import Input from './Input';
import fetchData from '../api/fetchData';
import imagesData from '../../assets/images/images.list';
import Button from '../components/Button';

const SearchCity = props => {

  const { navigation } = props;
  const [ city, setCity ] = useState('');
  const [ imageParam, setImageParam ] = useState(0);
  const maxImageParam = imagesData.length-1;
  
  const getData = async (city='') => {
    await fetchData(city)
    .then((data) => {
      if (data) {
        imageParam >= maxImageParam ? setImageParam(0) : setImageParam(imageParam+1);
        navigation.navigate('WeatherScreen', { data: data, imageIndex: imageParam })
        setCity('');
      } else {
        Alert.alert('City Not Found!');
        setCity('');
      }
    })
    .catch(error => console.log(error.message)); 
  }

  const { 
    container,
    primaryContainer, 
    imageBackground
  } = styles;

  const clearData = () => {
    setCity('');
    console.log('Cleared Data');
  }

  return (
    <View style={container}>
      <Image style={imageBackground} source={require('../../assets/images/wall.jpg')} />
      <Input city={city} setCity={setCity} getData={getData} />
      <View style={{ position: 'absolute', bottom: 0, display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
        <Button theme="filled" title="Search" getData={getData} functionality="getdata" city={city} />
        <Button theme="outline" title="Clear" clearData={clearData} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  primaryContainer: {
    width: '100%',
    height: 2000,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexGrow: 1,
  },
  imageBackground: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: -1
  }
})

export default SearchCity;
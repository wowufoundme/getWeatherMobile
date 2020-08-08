import React, { useState, useEffect } from 'react';
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
import searchData from '../api/searchData';
import imagesData from '../../assets/images/images.list';
import Button from '../components/Button';
import SearchResults from './SearchResults';

const SearchCity = props => {

  const { navigation } = props;
  const [ city, setCity ] = useState('');
  const [ imageParam, setImageParam ] = useState(0);
  const [ searchResults, setSearchResults ] = useState([]);
  const maxImageParam = imagesData.length;
  
  const getData = async (city='') => {
    await fetchData(city)
    .then((data) => {
      if (data) {
        setImageParam(Math.floor(Math.random() * maxImageParam));
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
    imageBackground,
    buttonContainer
  } = styles;

  const clearData = () => setCity('');

  useEffect(() => {
    if(  city.length > 2 ) {
        let newData = searchData(city);
        setSearchResults(newData);
    } else {
        setSearchResults([]); 
    }
  }, [city])

  return (
    <View style={container}>
      <Image style={imageBackground} source={require('../../assets/images/wall.jpg')} />
      <Input city={city} setCity={setCity} getData={getData} />
      { 
        city === "" ? 
        null :  
        <SearchResults title="Search" setCity={setCity} getData={getData} data={searchResults} />
      }
      <View style={buttonContainer} >
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
  imageBackground: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: -1
  },
  buttonContainer: {
    position: 'absolute', 
    bottom: 0, 
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'center',
  },
})

export default SearchCity;
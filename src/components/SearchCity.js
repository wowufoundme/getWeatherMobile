import React, { useState } from 'react';
import {  
  StyleSheet, 
  View, 
  Alert,
  Dimensions,
  Image
} from 'react-native';

import Input from './Input';
import fetchData from '../api/fetchData';
import imagesData from '../../assets/images/images.list';

const SearchCity = props => {

  const { navigation } = props;
  const [ city, setCity ] = useState('');
  const [ imageParam, setImageParam ] = useState(0);
  const maxImageParam = imagesData.length-1;
  
  const getData = async (city='delhi') => {
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

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
    <Image style={imageBackground} source={require('../../assets/images/wall.jpg')} />
      <Input city={city} setCity={setCity} getData={getData} />
    </View>

    // <View style={container} >
    //   <Header title='Get Weather' />
    //   <Image style={imageBackground} source={imagesRandomize[imageParam]} />
    //   <ScrollView contentContainerStyle={primaryContainer}>    
    //     <Input city={city} setCity={setCity} getData={getData} />
    //     <View style={{ width: '100%' }}>
    //       { displayData && <WeatherCard data={cityData} /> }
    //     </View>
    //   </ScrollView>
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
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
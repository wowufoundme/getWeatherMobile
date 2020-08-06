import React, { useState } from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  View, 
  Alert, 
  Image,
  Dimensions,
  Text
} from 'react-native';

import fetchData from './src/api/fetchData';
import Header from './src/components/Header';
import Input from './src/components/Input';
import WeatherCard from './src/components/WeatherCard';
import imagesData from './assets/images/images.list';

const App = () => {

  const [ city, setCity ] = useState('');
  const [ cityData, setCityData ] = useState({});
  const [ displayData, setDisplayData ] = useState(false);
  const [ imageParam, setImageParam ] = useState(0);
  const imagesRandomize = imagesData;
  const maxImageParam = imagesRandomize.length-1;
  
  const getData = async (city='delhi') => {
    const data = await fetchData(city); 
    if (data) {
      imageParam >= maxImageParam ? setImageParam(0) : setImageParam(imageParam+1);
      console.log(imageParam);
      setCityData(data);
      setDisplayData(true);
      setCity('');
    } else {
      Alert.alert('City Not Found!');
      setDisplayData(false);
      setCityData({});
      setCity('');
    }
  }

  const { 
    container,
    primaryContainer, 
    imageBackground
  } = styles;

  return (
    <View style={container} >
      <Header title='Get Weather' />
      <Image style={imageBackground} source={imagesRandomize[imageParam]} />
      <ScrollView contentContainerStyle={primaryContainer}>    
        <Input city={city} setCity={setCity} getData={getData} />
        <View style={{ width: '100%' }}>
          { displayData && <WeatherCard data={cityData} /> }
        </View>
      </ScrollView>
    </View>
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

export default App;
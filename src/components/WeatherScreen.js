import React, { useEffect } from 'react';
import { 
  View, 
  Text, 
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import imagesData from '../../assets/images/images.list';
import WeatherCard from './WeatherCard';

const WeatherScreen = ({ route }) => {

  const { imageBackground } = styles;
  const data = route.params.data;
  const imageIndex = route.params.imageIndex;

  useEffect(() => {
    console.log(data.name, imageIndex);
  })

  return (
    <View style={{ flex: 1, height: 2000 }}>
      <ScrollView contentContainerStyle={{ backgroundColor: '#ffffff', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flex: 0.6, width: '100%', height: 2000, alignItems: 'center', justifyContent: 'center' }}>
          <Image style={imageBackground} source={imagesData[imageIndex]} />
          <Text>{data.name}</Text>
        </View>
        <View style={{ flex: 0.4 }}>
          <WeatherCard data={data}/>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: -1
  }
})

export default WeatherScreen;
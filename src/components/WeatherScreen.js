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

  const { 
    imageBackground,
    contentContainer,
    splitSixTen
  } = styles;
  const data = route.params.data;
  const imageIndex = route.params.imageIndex;

  useEffect(() => {
    console.log(data.name, imageIndex);
  })

  return (
    <View style={{ flex: 1, height: 2000 }}>
      <ScrollView contentContainerStyle={contentContainer}>
        <View style={splitSixTen}>
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
  contentContainer: {
    backgroundColor: '#ffffff', 
    height: '100%', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  imageBackground: {
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  splitSixTen: {
    flex: 0.6, 
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'center',
  }
})

export default WeatherScreen;
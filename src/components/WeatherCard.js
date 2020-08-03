import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherCard = props => {

  const { data } = props;

  const { 
    parentContainer,
    cardContainer, 
    cityInfoContainer,
    cityName,
    cityCountry
  } = styles;

  return (
    <View style={parentContainer}>
      <View style={cityInfoContainer}>
        <Text style={cityName}>{data.name}</Text>
        <Text style={cityCountry}>{data.sys.country}</Text>
      </View>
      <View style={cardContainer}>

      </View>
    </View>
  )
}

const shadowHighDepth = {
  shadowColor: "#0a0a0a",
  shadowOffset: {
    width: 0,
    height: 7,
  },
  shadowOpacity: 0.41,
  shadowRadius: 9.11,
  elevation: 14,
}

const shadowLowDepth = {
  shadowColor: "#0a0a0a",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
}

const styles = StyleSheet.create({
  parentContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  cardContainer: {
    width: '92%',
    backgroundColor: '#efeeff',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    height: 400,
    ...shadowLowDepth
  },
  cityInfoContainer: {
    height: 100,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cityName: {
    fontSize: 32,
    fontFamily: 'SourceSansPro-Regular'
  },
  cityCountry: {
    fontSize: 18,
    padding: 10,
    marginLeft: 10,
    fontFamily: 'SourceSansPro-Bold',
    backgroundColor: '#000',
    color: '#fff'
  }
})

export default WeatherCard;
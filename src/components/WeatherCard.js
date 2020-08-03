import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

const WeatherCard = props => {

  const { data } = props;

  const { 
    parentContainer,
    cardContainer, 
    cityInfoContainer,
    cityName,
    cityCountry,
    cityInformation,
    cityGeoLocation,
    latitudeContainer,
    longitudeContainer
  } = styles;

  return (
    <ScrollView contentContainerStyle={parentContainer}>
      <View style={cityInformation}>
        <View style={cityInfoContainer}>
          <Text style={cityName}>{data.name}</Text>
          <Text style={cityCountry}>{data.sys.country}</Text>
        </View>
        <View style={cityGeoLocation}>
          <View style={latitudeContainer}></View>
          <View style={longitudeContainer}></View>
        </View>
      </View>
      <View style={cardContainer}>

      </View>
    </ScrollView>
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
  cityInformation: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  cardContainer: {
    width: '92%',
    backgroundColor: '#efeeff',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    height: 400,
    ...shadowLowDepth
  },
  cityInfoContainer: {
    height: 80,
    marginTop: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0'
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
  },
  cityGeoLocation: {
    backgroundColor: '#f0f',
    width: '100%',
    height: 500,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40
  },
  latitudeContainer: {
    backgroundColor: '#f00',
    height: '80%',
    width: '50%',
  },
  longitudeContainer: {
    backgroundColor: '#fff',
    height: '80%',
    width: '50%',
  }
})

export default WeatherCard;
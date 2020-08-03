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
    longitudeContainer,
    dataGeo,
    labelGeo
  } = styles;

  return (
    <ScrollView contentContainerStyle={parentContainer}>
      <View style={cityInformation}>
        <View style={cityInfoContainer}>
          <Text style={cityName}>{data.name}</Text>
          <Text style={cityCountry}>{data.sys.country}</Text>
        </View>
        <View style={cityGeoLocation}>
          <View style={latitudeContainer}>
            <Text style={dataGeo}>{data.coord.lat}</Text>
            <Text style={labelGeo}>Latitude</Text>
          </View>
          <View style={longitudeContainer}>
            <Text style={dataGeo}>{data.coord.lon}</Text>
            <Text style={labelGeo}>Longitude</Text>
          </View>
        </View>
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
    alignItems: 'center',
  },
  cityInformation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  cityInfoContainer: {
    height: 80,
    marginTop: 10,
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
  },
  cityGeoLocation: {
    width: '100%',
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40
  },
  latitudeContainer: {
    height: '80%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  longitudeContainer: {
    height: '80%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dataGeo: {
    fontSize: 52,
    fontFamily: 'SourceSansPro-Light'
  },
  labelGeo: {
    fontSize: 18,
    color: '#a1a1a1',
    fontFamily: 'SourceSansPro-SemiBold'
  }
})

export default WeatherCard;
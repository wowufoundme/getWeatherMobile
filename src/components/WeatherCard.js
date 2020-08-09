import React from 'react';
import { 
  ScrollView, 
  Text, 
  StyleSheet, 
  View, 
  Image 
} from 'react-native';

import Param from './Param';
import Label from './Label';

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
    labelGeo,
    temperatureContainer,
    temperatureIcon,
    temperatureReading,
    gridParent,
    gridChild
  } = styles;

  return (
    <ScrollView contentContainerStyle={parentContainer}>
      {/* <View style={cityInformation}>
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
      </View> */}
      <View style={cardContainer}>
        {/* <View style={temperatureContainer}>
          <Text style={temperatureReading}>{Math.round(data.main.temp)}&deg; C</Text>
          <Image
            height={50}
            width={50}
            source={{ uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` }}
            style={temperatureIcon}
          />
        </View> */}
        <View style={gridParent}>
          <View style={gridChild}>
            <Param value={data.weather[0].main} />
            <Label value='Condition' />
          </View>
          <View style={gridChild}>
            <Param value={`${data.main.temp_max}°`} />
            <Label value='Max Temp' />
          </View>
          <View style={gridChild}>
            <Param value={`${data.main.temp_min}°`} />
            <Label value='Min Temp' />
          </View>
        </View>
        <View style={gridParent}>
          <View style={gridChild}>
            <Param value={`${data.main.humidity}%`} />
            <Label value='Humidity' />
          </View>
          <View style={gridChild}>
            <Param value={`${data.wind.speed} km/hr`} />
            <Label value='Wind Speed' />
          </View>
          <View style={gridChild}>
            <Param value={data.main.pressure} />
            <Label value='Pressure' />
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
    width: 10,
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
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: '95%',
    marginTop: 20,
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
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginBottom: 30,
  },
  latitudeContainer: {
    height: '80%',
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  longitudeContainer: {
    height: '80%',
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dataGeo: {
    fontSize: 24,
    fontFamily: 'SourceSansPro-Light'
  },
  labelGeo: {
    fontSize: 18,
    color: '#a1a1a1',
    fontFamily: 'SourceSansPro-SemiBold'
  },
  cardContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 30,
    paddingHorizontal: 20,
    ...shadowLowDepth
  },
  temperatureContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  temperatureIcon: {
    width: 100,
    height: 100
  },
  temperatureReading: {
    fontSize: 64,
    fontFamily: 'SourceSansPro-Light'
  },
  gridParent: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gridChild: {
    width: '33%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default WeatherCard;
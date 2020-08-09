import React from 'react';
import { 
  ScrollView, 
  StyleSheet, 
  View} from 'react-native';

import Param from './Param';
import Label from './Label';

const WeatherCard = props => {

  const { data } = props;

  const { 
    parentContainer,
    cardContainer, 
    gridParent,
    gridChild,
  } = styles;

  return (
    <ScrollView contentContainerStyle={parentContainer}>
      <View style={cardContainer}>
        <View style={gridParent}>
          <View style={gridChild}>
            <Param value={data.weather[0].main} />
            <Label value='Condition' />
          </View>
          <View style={gridChild}>
            <Param value={`${data.main.humidity}%`} />
            <Label value='Humidity' />
          </View>
        </View>
        <View style={gridParent}>
          <View style={gridChild}>
            <Param value={`${data.main.temp_max}° C`} />
            <Label value='Max Temp' />
          </View>
          <View style={gridChild}>
            <Param value={`${data.main.temp_min}° C`} />
            <Label value='Min Temp' />
          </View>
        </View>
        <View style={gridParent}>
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
  cardContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingTop: 30,
    paddingHorizontal: 20,
    ...shadowLowDepth
  },
  gridParent: {
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  gridChild: {
    width: '45%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default WeatherCard;
import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const TemperatureModal = props => {

  const { data } = props;

  const {
    parentContainer,
    largeTag,
    largeTagValue,
    largeTagLabel,
    geoTag,
    geoTagLabel,
    geoTagValue,
    tempTag,
    tempTagValue
  } = styles;

  return (
    <View style={parentContainer}>
      <View style={largeTag}>
        <Text style={largeTagValue} >{data.name}</Text>
        <Text style={largeTagLabel} >{data.sys.country}</Text>
      </View>
      <View style={geoTag}>
        <Text style={geoTagValue} >{data.coord.lat}, {data.coord.lon}</Text>
        <Text style={geoTagLabel} >Geo Location</Text>
      </View>
      <View style={tempTag}>
        <Text style={tempTagValue} >{Math.floor(data.main.temp)}° C</Text>
      </View>
      <View style={largeTag}>
        <Text style={largeTagValue} >{data.main.feels_like}° C</Text>
        <Text style={largeTagLabel} >Feels Like</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  largeTag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  largeTagValue: {
    fontSize: 28,
    color: '#ffffff',
    paddingHorizontal: 10,
    fontFamily: 'SourceSansPro-SemiBold',
  },
  largeTagLabel: {
    paddingHorizontal: 5,
    paddingVertical: 8,
    backgroundColor: '#2030ba',
    color: '#ffffff',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
    fontFamily: 'SourceSansPro-Bold',
  },
  geoTag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  geoTagValue: {
    fontSize: 20,
    color: '#ffffff',
    textAlignVertical: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontFamily: 'SourceSansPro-Regular',
  },
  geoTagLabel: {
    paddingHorizontal: 5,
    paddingVertical: 8,
    backgroundColor: '#2030ba',
    color: '#ffffff',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
    fontFamily: 'SourceSansPro-Bold',
  },
  tempTag: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  tempTagValue: {
    fontSize: 128,
    color: '#ffffff',
    textAlignVertical: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    fontFamily: 'SourceSansPro-Light',
  }
})

export default TemperatureModal;
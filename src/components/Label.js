import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Label = props => {

  const { value } = props;
  const { labelText } = styles;

  return (
    <Text style={labelText}>{value}</Text>
  )
}

const styles = StyleSheet.create({
  labelText: {
    fontSize: 16,
    color: '#5a5a5a',
    fontFamily: 'SourceSansPro-Regular',
  }
})

export default Label;
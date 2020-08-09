import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Param = props => {

  const { value } = props;
  const { paramText } = styles;

  return (
    <Text style={paramText}>{value}</Text>
  )
}

const styles = StyleSheet.create({
  paramText: {
    fontSize: 18,
    fontFamily: 'SourceSansPro-Bold',
  }
})

export default Param;
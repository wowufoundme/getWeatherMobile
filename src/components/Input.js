import React from 'react';
import { 
  View, 
  TextInput, 
  StyleSheet 
} from 'react-native';

const Input = props => {

  const { 
    city,
    setCity
  } = props;

  const { 
    inputContainer,
    inputText,
    placeholderStyles
   } = styles;

  return (
    <View style={inputContainer}>
      <TextInput 
        value={city}
        onChangeText={text => setCity(text)}
        placeholder='Enter a city'
        placeholderStyle={placeholderStyles} 
        placeholderTextColor="#D8D8D8"
        style={inputText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#F4F5FB',
    width: '95%',
    marginTop: 10,
    elevation: 5,
    borderRadius: 2
  },
  inputText: {
    color: '#0a0a0a',
    paddingLeft: 20,
    paddingRight: 20
  },
  placeholderStyles: {
    color: '#5a5a5a',
    fontFamily: 'SourceSansPro-Light'
  }
})

export default Input;
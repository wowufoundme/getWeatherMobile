import React from 'react';
import { 
  View, 
  TextInput, 
  StyleSheet 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Input = props => {

  const { 
    city,
    setCity,
    getData
  } = props;

  const { 
    inputContainer,
    inputText,
    placeholderStyles
   } = styles;

  return (
    <View style={inputContainer}>
      <Icon name='search' size={16} color='#ffffff' style={{ paddingLeft: 10 }}/>
      <TextInput 
        value={city}
        onChangeText={text => setCity(text)}
        placeholder='Enter a city'
        placeholderStyle={placeholderStyles} 
        placeholderTextColor="#D8D8D8"
        style={inputText}
        autoCapitalize='words'
        autoCompleteType='off'
        autoCorrect={false}
        autoFocus
        clearButtonMode='while-editing'
        onSubmitEditing={() => getData(city)}
        blurOnSubmit={false}
        returnKeyType="search"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'rgba(244, 245, 251, 0.2)',
    width: '95%',
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 9999,
    marginTop: 16,
    borderRadius: 4,
    paddingLeft: 10,
  },
  inputText: {
    color: '#ffffff',
    paddingLeft: 10,
    paddingRight: 20,
    width: '100%'
  },
  placeholderStyles: {
    color: '#5a5a5a',
    fontFamily: 'SourceSansPro-Light'
  }
})

export default Input;
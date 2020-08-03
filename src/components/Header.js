import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image 
} from 'react-native';

const Header = props => {

  const { title } = props;
  const { 
    headerContainer,
    imageLogo,
    headerTitle 
  } = styles;

  return (
    <View style={headerContainer}>
      <Image 
        style={imageLogo}
        source={{ uri: 'https://raw.githubusercontent.com/wowufoundme/getWeather/master/src/assets/logo.png' }}
      />
      <Text style={headerTitle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: '#0a0a0a',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageLogo: {
    height: 50,
    width: 50,
    marginLeft: 10,
    marginRight: 5 
  },
  headerTitle: {
    color: '#0599ff',
    fontSize: 20,
    fontFamily: 'SourceSansPro-SemiBold'
  }
})

export default Header;
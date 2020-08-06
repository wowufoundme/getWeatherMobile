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
    width: '100%',
    height: 60,
    backgroundColor: '#efeeff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 22,
    elevation: 5,
  },
  imageLogo: {
    height: 50,
    width: 50,
    marginLeft: 10,
    marginRight: 5 
  },
  headerTitle: {
    color: '#0a0a0a',
    fontSize: 20,
    fontFamily: 'SourceSansPro-SemiBold'
  }
})

export default Header;
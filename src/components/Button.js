import React from 'react';
import { 
  View, 
  Text,
  StyleSheet 
} from 'react-native';
import { Button as Btn } from 'react-native-elements';

const Button = props => {

  const { 
    theme, 
    title,
    getData,
    clearData,
    city,
    functionality
  } = props;
  const { 
    btn,
    btnFilled, 
    btnOutline,
    btnText,
    btnTextFilled,
    btnTextOutline
  } = styles;

  return (
    <Btn 
      buttonStyle={[ btn, theme === "filled" ? btnFilled : btnOutline ]} 
      title={title}
      titleStyle={[ btnText, theme === "filled" ? btnTextFilled : btnTextOutline ]}
      onPress={() => {functionality === "getdata" ? getData(city) : clearData()}}
     />
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 160,
    height: 60,
    paddingVertical: 16,
    paddingHorizontal: 30,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 3,
  },
  btnFilled: {
    backgroundColor: '#3445dc',
    color: '#ffffff',
  },
  btnOutline: {
    backgroundColor: '#ffffff',
    borderWidth: 3,
    borderColor: '#2030ba',
    color: '#2030ba',
  },
  btnText: {
    textTransform: 'uppercase',
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: 'SourceSansPro-SemiBold',
    textAlign: 'center'
  },
  btnTextFilled: {
    color: '#ffffff',
  },
  btnTextOutline: {
    color: '#2030ba',
  },
  clearBtnStyles: {
    backgroundColor: 'rgba(0,0,0,0)'
  }
});

export default Button;
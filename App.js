import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';

import fetchData from './src/api/fetchData';

import Header from './src/components/Header';

const App = () => {
  
  const [ city, setCity ] = useState('');
  const [ cityData, setCityData ] = useState({});
  const [ displayData, setDisplayData ] = useState(false);
  const [ theme, setTheme ] = useState('');
  let [ searchResults, setSearchResults ] = useState([]);
  
  const getData = async (city='delhi') => {
      const data = await fetchData(city);
      setCityData(data);
      setDisplayData(true);
      setSearchResults([]);
      setCity('');
  }

  useEffect(() => {
      if(  city.length > 2 ) {
          let newData = searchData(city);
          setSearchResults(newData);
      } else {
          setSearchResults([]); 
      }
  }, [city])

  const clearData = () => {
      setCity('');
      setDisplayData(false);
  }

  return (
    <ScrollView>
      <Header title='Get Weather'/>
    </ScrollView>
  )
}

export default App;
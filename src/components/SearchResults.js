import React from 'react';
import { 
  Text,
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import { ListItem } from 'react-native-elements';

const SearchResults = props => {

  const { 
    parentContainer,
    listItemStyle,
    searchResultItem
  } = styles;

  const {
    data,
    setCity,
    getData
  } = props;

  const cityParam = (e) => {
    setCity(e.city);
    getData(e.city);
  }

  const renderItem = ({ item }) => {
    return (
      <ListItem 
        key={item.id}
        title={
          <Text style={searchResultItem} >
            {`${item.city}, ${item.country}`}
          </Text>
        }
        bottomDivider
        containerStyle={listItemStyle}
        onPress={() => cityParam(item)}
      />
    )
  }

  return (
    <View style={parentContainer} >
      <FlatList 
        keyExtractor={( item ) => item.id.toString()}
        data={data}
        renderItem={(item) => renderItem(item)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  parentContainer: {
    width: '95%',
    maxHeight: 250,
    backgroundColor: '#fff',
  },
  listItemStyle: {
    color: '#888'
  },
  searchResultItem: {
    fontFamily: 'SourceSansPro-Regular',
    color: '#222',  
    fontSize: 16
  }
});

export default SearchResults;
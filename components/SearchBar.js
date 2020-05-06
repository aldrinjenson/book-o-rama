import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";

const SearchBar = () => {

  const [query, setQuery] = useState('')

  return (
    <View style={styles.searchBar}>
      <MaterialIcons name="search" size={25} />
      <TextInput
        placeholder="Search from a list of over 1000 books"
        value={query}
        onChangeText={(value) => setQuery(value)}
      />
    </View>
  );
}

export default SearchBar

const styles = StyleSheet.create({
  searchBar:{
    flexDirection:'row',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 28,
    width: '85%',
    justifyContent:'space-around',
    padding: 5,
    marginVertical: 20,
    alignSelf:'center'
  },
})

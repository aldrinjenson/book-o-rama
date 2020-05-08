import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../global/globalStyles";
import SearchBar from "../components/SearchBar";
import DisplayBooks from "../components/DisplayBooks";
import axios from "axios";

const SearchBooks = ({navigation}) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const bookQuery = (query) => {
    setisLoading(true);
    const fetchData = async () => {
      const API_URL = `https://www.googleapis.com/books/v1/volumes`;
      try {
        const result = await axios.get(`${API_URL}?q=${query}`);
        // const result = await axios.get(`${API_URL}?q=Harry+Potter`);
        setBooks(result.data.items);
        setisLoading(false);
      } catch (error) {
        console.log("Error: " + error);
      }
    };
    fetchData();
  };

  return (
    <View style={globalStyles.container}>
      <Text>Search Popular books</Text>
      <SearchBar setValue={bookQuery} placeholder="eg. Harry Potter" />
      {isLoading ? <Text>Loading...</Text> : <DisplayBooks books={books} navigation={navigation} />}
    </View>
  );
};

export default SearchBooks;

const styles = StyleSheet.create({});

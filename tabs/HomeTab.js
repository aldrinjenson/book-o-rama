import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  ActivityIndicator,
} from "react-native";
import { globalStyles } from "../global/globalStyles";
import BookCollection from "../components/BookCollection";
import { collections } from "../data/CollectionList";
import axios from "axios";

const HomeTab = ({ navigation }) => {
  const [topBooksList, setTopBooksList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = "lists/overview.json";
      const baseUrl = "https://api.nytimes.com/svc/books/v3/";
      const apiKey = "ds3m2kNA6cZBkueVBxgYWA67QEIWA9W6";
      const API_URL = baseUrl + query + "?api-key=" + apiKey;
      try {
        const res = await axios.get(API_URL);
        setTopBooksList(res.data.results.lists);
      } catch (error) {
        console.log("error in accessing" + error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={{ ...globalStyles.container, justifyContent: "flex-start" }}>
      {!topBooksList.length ? (
        <ActivityIndicator
          size="large"
          color="0000ff"
          style={{ alignItems: "center", flex: 1 }}
        />
      ) : (
        <FlatList
          keyExtractor={(item, index) => item.list_id.toString()}
          data={topBooksList}
          renderItem={({ item }) => (
            <BookCollection
              key={item.list_id}
              collection={item}
              navigation={navigation}
            />
          )}
        />
      )}
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({});

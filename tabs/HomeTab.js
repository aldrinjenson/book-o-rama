import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { globalStyles } from "../global/globalStyles";
import SearchBar from "../components/SearchBar";
import BookCollection from "../components/BookCollection";
import { collections } from "../data/CollectionList";

const HomeTab = ({navigation}) => {
  return (
    <View style={{ ...globalStyles.container, justifyContent: "flex-start" }}>
      <SearchBar />
      <FlatList
        data={collections}
        renderItem={({ item }) => (
          <BookCollection key={item.key} collection={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({});

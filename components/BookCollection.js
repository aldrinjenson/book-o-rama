import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Book from "./Book";
import { globalStyles } from "../global/globalStyles";

const BookCollection = ({ collection }) => {
  return (
    <View style={styles.collection}>
      <Text style={styles.collectionTitle}>
        {collection.title.toUpperCase()}
      </Text>
      <ScrollView horizontal style={styles.horizontalScroll}>
        {collection.books.map((item) => (
          <Book
            key={item.key}
            name={item.name}
            author={item.author}
            imageUrl={item.imageUrl}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default BookCollection;

const styles = StyleSheet.create({
  collection: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    height: "33%",
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  collectionTitle: {
    ...globalStyles.title,
  },
  horizontalScroll: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 6,
    marginVertical: 6,
  },
});

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Book from "./Book";
import { globalStyles } from "../global/globalStyles";

const BookCollection = ({ collection, navigation }) => {
  return (
    <View style={styles.collection}>
      <Text style={styles.collectionTitle}>
        {collection.title.toUpperCase()}
      </Text>
      <ScrollView horizontal style={styles.horizontalScroll}>
        {collection.books.map((item) => (
          <TouchableOpacity
            key={item.key}
            onPress={() => navigation.navigate("BookDetails", item)}
          >
            <Book
              name={item.name}
              author={item.author}
              imageUrl={item.imageUrl}
            />
          </TouchableOpacity>
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
    paddingHorizontal: 10,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  collectionTitle: {
    ...globalStyles.title,
    marginVertical: 4,
    paddingVertical: 1,
  },
  horizontalScroll: {
    paddingVertical: 6,
    marginVertical: 6,
  },
});

import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Image,
} from "react-native";
import { globalStyles } from "../global/globalStyles";

const DisplayBooks = ({ books, navigation }) => {
  if (!books.length) return null;

  const handleClick = (item) => {
    const book = {
      name: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      rating: item.volumeInfo.averageRating,
      publisher:item.volumeInfo.publisher,
      description: item.volumeInfo.description,
      categories: item.volumeInfo.categories,
      imageUrl: item.volumeInfo.imageLinks.thumbnail,
      webReaderLink: item.volumeInfo.webReaderLink,
      infoLink: item.volumeInfo.infoLink,
    };
    navigation.navigate("BookDetails", book);
  };

  return (
    <View style={styles.bookList} >
      <FlatList
        data={books}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.horizonatalCard}
              onPress={() => handleClick(item)}
            >
              <Image
                source={{ uri: `${item.volumeInfo.imageLinks.smallThumbnail}` }}
                style={styles.bookImage}
              />
              <View style={styles.textContent}>
                <Text style={globalStyles.title}>{item.volumeInfo.title}</Text>
                <Text>{item.volumeInfo.authors[0]}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default DisplayBooks;

const styles = StyleSheet.create({
  horizonatalCard: {
    flexDirection: "row",
    padding: 3,
    margin: 6,
    borderWidth: 1,
    borderColor: "#aaa",
    alignItems: "center",
  },
  bookImage: {
    height: 95,
    width: 80,
    margin: 4,
    marginRight: 16,
  },
  textContent: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "flex-start",
  },
  bookList:{
    marginBottom:90,
  }
});

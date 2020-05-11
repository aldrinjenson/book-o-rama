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
import BookListCard from "./BookListCard";

const DisplayBooks = ({ books, navigation }) => {
  if (!books)
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 200,
        }}
      >
        <Text>Sorry, No such book exists in our database!!</Text>
        <Text>Please check your search query</Text>
      </View>
    );

  const handleClick = (item) => {
    let book = {
      name: item.volumeInfo.title,
      publisher: item.volumeInfo.publisher,
      description: item.volumeInfo.description,
      publishedDate: item.volumeInfo.publishedDate,
      isFromNY: false,
      rating: item.volumeInfo.averageRating,
      imageUrl: item.imageSource,
      authors: item.authors,
      categories: item.volumeInfo.categories,
      previewLink: item.volumeInfo.previewLink,
      buyLink:
        "https://www.amazon.in/dp/" +
        item.volumeInfo.industryIdentifiers[0].identifier,
      bookId: item.id,
    };
    navigation.navigate("BookDetails", book);
  };
  return (
    <View style={styles.bookList}>
      <FlatList
        data={books}
        renderItem={({ item }) => {
          let imageSource = item.volumeInfo.imageLinks
            ? { uri: `${item.volumeInfo.imageLinks.thumbnail}` }
            : require("../assets/no_preview_image.png");
          let authors = item.volumeInfo.authors ? item.volumeInfo.authors : [];
          return (
            <TouchableOpacity
              onPress={() => handleClick({ ...item, imageSource, authors })}
            >
              <View style={styles.horizonatalCard}>
                <Image style={styles.bookImage} source={imageSource} />
                <View style={styles.textContent}>
                  <Text style={globalStyles.title}>
                    {item.volumeInfo.title}
                  </Text>
                  <Text>{authors[0]}</Text>
                </View>
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
  bookList: {
    marginBottom: 95,
  },
  horizonatalCard: {
    borderWidth: 1,
    flexDirection: "row",
    borderColor: "#aaa",
    alignItems: "center",
    padding: 3,
    margin: 6,
  },
  bookImage: {
    height: 95,
    width: 80,
    margin: 4,
    marginRight: 16,
  },
  textContent: {
    flex: 1,
  },
});

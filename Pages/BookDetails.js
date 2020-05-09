import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  Button,
  ScrollView,
  Linking,
} from "react-native";
import { globalStyles } from "../global/globalStyles";
import { ActivityIndicator } from "react-native-paper";
import axios from "axios";

const BookDetails = ({ route }) => {
  const { isFromNY } = route.params;
  const [isLoaded, setIsLoaded] = useState(false);

  const [book, setBook] = useState({});

  const fetchData = async () => {
    const { isbn13, imageUrl, buyLink } = route.params;
    const API_URL =
      "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn13;
    try {
      const result = await axios.get(API_URL);
      setBook({
        name: result.data.items[0].volumeInfo.title,
        publisher: result.data.items[0].volumeInfo.publisher,
        description: result.data.items[0].volumeInfo.description,
        imageUrl,
        buyLink,
        publishedDate: result.data.items[0].volumeInfo.publishedDate,
        rating: result.data.items[0].volumeInfo.averageRating,
        authors: result.data.items[0].volumeInfo.authors,
        categories: result.data.items[0].volumeInfo.categories,
        previewLink: result.data.items[0].volumeInfo.previewLink,
        isbn10:
          result.data.items[0].volumeInfo.industryIdentifiers[0].identifier,
      });

      setIsLoaded(true);
    } catch (error) {
      console.log("Error " + error);
    }
  };

  useEffect(() => {
    if (isFromNY) {
      fetchData();
    } else {
      setBook(route.params);
      setIsLoaded(true);
    }
    // return () => {
    //   cleanup
    // }
  }, []);

  console.log(book)
  return (
    <ScrollView>
      {isLoaded ? (
        <View style={styles.BookDetailsCard}>
          <View style={styles.topPart}>
            <Image
              source={book.imageUrl}
              resizeMode="contain"
              style={styles.bookImage}
            />
            <View style={styles.topTexts}>
              <Text style={styles.title}>{book.name}</Text>
              <View>
                {book.authors && book.authors.map((author) => (
                  <Text key={author}>{author}</Text>
                ))}
                {book.rating ? (
                  <Text style={styles.subKey}>Rating: {book.rating}</Text>
                ) : (
                  <Text>Not rated</Text>
                )}
              </View>
              <Text style={styles.subKey}>
                Publisher: <Text style={styles.subValue}>{book.publisher}</Text>
              </Text>
              <Button
                title="More Details"
                onPress={() => Linking.openURL(book.previewLink)}
              />
            </View>
          </View>
          <View style={styles.middle}>
            <View>
              <Text style={styles.subKey}>
                Published Date: {book.publishedDate}
              </Text>
              {book.categories && (
                <Text style={styles.subKey}>
                  Categories: {book.categories.map((category) => category)}
                </Text>
              )}
              <Button
                title="Buy Now"
                onPress={() => Linking.openURL(book.buyLink)}
              />
            </View>

            {book.description && (
              <Text style={styles.subKey}>Description:</Text>
            )}
            <Text style={styles.subValue}>{book.description}</Text>
          </View>
        </View>
      ) : (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  BookDetailsCard: {
    flex: 1,
    margin: 15,
    // paddingHorizontal:10,
    // paddingTop:10,
    // paddingBottom:42,
    elevation: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#444",
  },
  topPart: {
    flexDirection: "row",
    // borderWidth: 1,
    borderColor: "#777",
    // justifyContent:'space-between',
  },
  topTexts: {
    flex: 1,
    flexDirection: "column",
    // borderWidth: 1,
    justifyContent: "space-around",
    marginHorizontal: 6,
    padding: 4,
  },
  bookImage: {
    // borderWidth: 1,
    // flex: 1,
    height: 250,
    width: 155,
    marginHorizontal: 6,
    paddingHorizontal: 6,
  },
  subKey: {
    fontWeight: "bold",
    paddingTop: 5,
  },
  subValue: {
    fontWeight: "normal",
    letterSpacing: 0.6,
    lineHeight: 22,
    paddingTop: 5,
  },
  // description:{
  //   letterSpacing:1.5,
  //   lineHeight:19
  // }
  middle: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
});

import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  Button,
  ScrollView,
  Linking,
} from "react-native";
import { ActivityIndicator, FAB } from "react-native-paper";
import axios from "axios";
import { WishListContext } from "../contexts/wishListContext";

const BookDetails = ({ route }) => {
  const { isFromNY, isFromWishList } = route.params;
  const [isLoaded, setIsLoaded] = useState(false);

  const [book, setBook] = useState({});
  // if(isFromWishList)
  //   setBook(route.params)  // as now route.params = book
  // No need to enter the above, as the logic is already appled in the else part of the useeffect hook
  const { addNewBookToWishList } = useContext(WishListContext);

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
      return <Text>Error</Text>;
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

  const [fabClicked, setFabClicked] = useState(false);
  const handleFABClick = () => {
    if (fabClicked) return null;
    addNewBookToWishList(book);
    setFabClicked(true);
  };

  return (
    <View style={styles.page}>
      {isLoaded ? (
        <View style={styles.bookDetailsPage}>
          <ScrollView style={{ flex: 1 }}>
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
                    {book.authors &&
                      book.authors.map((author) => (
                        <Text key={author}>{author}</Text>
                      ))}
                    {book.rating ? (
                      <Text style={styles.subKey}>Rating: {book.rating}</Text>
                    ) : (
                      <Text style={styles.subKey}>Not rated</Text>
                    )}
                  </View>
                  <Text style={styles.subKey}>
                    Publisher:{" "}
                    <Text style={styles.subValue}>{book.publisher}</Text>
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

                <Text style={styles.subKey}>
                  Description:
                  {book.description ? (
                    <Text style={styles.subValue}>{book.description}</Text>
                  ) : (
                    <Text> Not available</Text>
                  )}
                </Text>
              </View>
            </View>
          </ScrollView>
          <FAB style={styles.fab} icon="bookmark" onPress={handleFABClick} />
        </View>
      ) : (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="0000ff" />
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
};

export default BookDetails;
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  bookDetailsPage: {
    flex: 1,
  },

  BookDetailsCard: {
    flex: 1,
    marginHorizontal: 15,
    elevation: 10,
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#444",
  },
  topPart: {
    flexDirection: "row",
    flex: 1,
    borderColor: "#777",
  },
  topTexts: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    marginHorizontal: 6,
    padding: 4,
  },
  bookImage: {
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
  middle: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 6,
    paddingHorizontal: 4,
    marginBottom: 80,
  },
});

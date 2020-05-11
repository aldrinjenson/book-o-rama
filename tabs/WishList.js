import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import { globalStyles } from "../global/globalStyles";
import { Title } from "react-native-paper";
import DisplayBooks from "../components/DisplayBooks";
import { WishListContext } from "../contexts/wishListContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import BookListCard from "../components/BookListCard";

const WishList = ({ navigation }) => {
  const { wishList } = useContext(WishListContext);
  return (
    <View style={{ ...globalStyles.container, flex: 1 }}>
      <Title style={globalStyles.title}>My Wish List</Title>
      {wishList.length ? (
        // <DisplayBooks books={wishList} navigation={navigation} />
        <View style={{ marginBottom: 40 }}>
          <ScrollView>
            {wishList.map((book) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("BookDetails", book)}
              >
                <View>
                  <BookListCard
                    imageUrl={book.imageUrl}
                    name={book.name}
                    author={book.authors[0]}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.emptyWishListMessage}>
          <Text style={styles.emptyWishListMessageText}>
            Your wishList is currently empty!!
          </Text>
          <Text style={styles.emptyWishListMessageText}>
            You can add intersting books to your wishlist by clicking on the
            floating button on the right bottom
          </Text>
        </View>
      )}
    </View>
  );
};

export default WishList;

const styles = StyleSheet.create({
  categoryCard: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#eee",
    marginVertical: 6,
    marginHorizontal: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    // backgroundColor:'skyblue'
  },
  categoryCardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
    // backgroundColor:'pink'
  },
  emptyWishListMessage: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyWishListMessageText: {
    padding: 6,
    margin: 6,
  },
});

import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { globalStyles } from "../global/globalStyles";
import { Title } from "react-native-paper";
import DisplayBooks from "../components/DisplayBooks";
import { WishListContext } from "../contexts/wishListContext";

const WishList = ({ navigation }) => {
  const { wishList } = useContext(WishListContext);
  console.log(wishList);

  return (
    <View style={{ ...globalStyles.container, flex: 1 }}>
      <Title style={globalStyles.title}>My Wish List</Title>
      {wishList.length ? (
        // <DisplayBooks books={wishList} navigation={navigation} />
        null
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

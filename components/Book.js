import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Book = ({ name, author, imageUrl }) => {
  return (
    <View style={styles.bookCard}>
      <Image source={imageUrl} style={styles.bookImage} resizeMode='contain' />
      <Text style={styles.bookName}>{name}</Text>
      <Text style={styles.bookAuthor}>{author}</Text>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  bookCard: {
    // flex: 1,
    // height: '33%'
    paddingHorizontal: 6,
    margin: 4
  },
  bookImage: {
    alignSelf: "center",
    // width: "80%",
    // height: "80%",
  },
  bookName:{
    fontWeight:'900'
  },
  bookAuthor:{

  }
});

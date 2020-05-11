import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { globalStyles } from "../global/globalStyles";
import { MaterialIcons } from "@expo/vector-icons";

const BookListCard = ({ imageUrl, name, author, book, navigation,deleteBook }) => {
  return (
    <View style={styles.horizonatalCard}>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => navigation.navigate("BookDetails", book)}
          style={styles.TouchableOpacity}
        >
          <Image style={styles.bookImage} source={imageUrl} />
          <View style={styles.textContent}>
            <Text style={globalStyles.title}>{name}</Text>
            <Text>{author}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <MaterialIcons
        name="delete"
        size={32}
        style={styles.icon}
        onPress={() => deleteBook(book)}
      />
    </View>
  );
};

export default BookListCard;

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
  TouchableOpacity: {
    flex: 1,
    // borderWidth:1,
    flexDirection: "row",
  },
  content: {
    flexDirection: "row",
    // borderWidth: 1,
    flex: 1,
  },
  textContent: {
    flex: 1,
    //   flexDirection: "column",
    //   alignSelf: "flex-start",
  },
  icon: {
    padding: 16,
    // borderWidth: 1,
  },
});

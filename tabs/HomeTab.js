import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { globalStyles } from "../global/globalStyles";
import SearchBar from "../components/SearchBar";
import BookCollection from "../components/BookCollection";

const HomeTab = () => {
  const [collections, setCollections] = useState([
    {
      key: "1",
      title: "trending",
      books: [
        {
          key: "1",
          name: "Song of fire and ice",
          author: "some Random guy",
          imageUrl: require("../assets/bookImages/book8.jpg"),
        },
        {
          key: "2",
          name: "Sherlock and the icicle",
          author: "another Random guy",
          imageUrl: require("../assets/bookImages/book2.jpg"),
        },
        {
          key: "3",
          name: "Yao and his coconut",
          author: "Major Vaffi Schweets",
          imageUrl: require("../assets/bookImages/book3.jpg"),
        },
        {
          key: "4",
          name: "How I met his Majesty",
          author: "Duke of Candyburgh",
          imageUrl: require("../assets/bookImages/book4.jpeg"),
        },
      ],
    },
    {
      key: "2",
      title: "recomended For you",
      books: [
        {
          key: "1",
          name: "Why the heck you sad for?",
          author: "Happy Flappy",
          imageUrl: require("../assets/bookImages/book5.jpeg"),
        },
        {
          key: "2",
          name: "Chess and its tricks",
          author: "Grandma Ester",
          imageUrl: require("../assets/bookImages/book6.png"),
        },
        {
          key: "3",
          name: "The sweet effects of jelly-fundae",
          author: "Sweety Sugarplum",
          imageUrl: require("../assets/bookImages/book7.jpg"),
        },
        {
          key: "4",
          name: "Electricity and its craziness",
          author: "Teslonica Fluffy",
          imageUrl: require("../assets/bookImages/book8.jpg"),
        },
      ],
    },
  ]);

  return (
    <View style={{ ...globalStyles.container, justifyContent: "flex-start" }}>
      <SearchBar />
      <View stle={styles.booksCollectionFlatList}>
        <FlatList
          data={collections}
          renderItem={({ item }) => (
            <BookCollection key={item.key} collection={item} />
          )}
        />
      </View>
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  booksCollectionFlatList: {
    flex: 1,
    height: "70%",
    width: "90%",
    color: "pink",
    alignItems:'center'
  },
});

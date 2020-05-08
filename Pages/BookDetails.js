import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  Button,
  ScrollView,
} from "react-native";
import { globalStyles } from "../global/globalStyles";

const BookDetails = ({ route }) => {
  const {
    name,
    authors,
    imageUrl,
    rating,
    publisher,
    description,
    // categories,
    infoLink,
    WebReaderLink,
  } = route.params;

  return (
    <ScrollView>
      <View style={styles.BookDetailsCard}>
        <View style={styles.topPart}>
          <Image
            source={{ uri: imageUrl }}
            resizeMode="contain"
            style={styles.bookImage}
          />
          <View style={styles.topTexts}>
            <Text style={globalStyles.title}>{name}</Text>
            <Text style={globalStyles.subTitle}>{authors.map(author=><Text>{author}</Text>) || authors}</Text>
            <Text style={styles.subKey}>
              Publisher: <Text style={styles.subValue}>{publisher}</Text>
            </Text>
            {/* <Text style={styles.subKey}>
              Categories:
              {categories.map((category) => (
                <Text key={category}>
                  <Text style={styles.subValue}>{category}</Text>
                </Text>
              ))}
            </Text> */}
          </View>
        </View>
        <View style={styles.middle}>
          <Text style={styles.subKey}>
            Rating: <Text style={styles.subValue}>{rating}</Text>
          </Text>
          <Text style={styles.subKey}>Description:</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
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
    justifyContent: "space-between",
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

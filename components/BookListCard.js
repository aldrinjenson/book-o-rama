import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { globalStyles } from '../global/globalStyles';

const BookListCard = ({imageUrl, name, author}) => {
  return (
    <View style={styles.horizonatalCard}>
      <Image style={styles.bookImage} source={imageUrl} />
      <View style={styles.textContent}>
        <Text style={globalStyles.title}>{name}</Text>
        <Text>{author}</Text>
      </View>
    </View>
  );
}

export default BookListCard

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
});

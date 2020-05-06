import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../global/globalStyles";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const BookDetails = ({ route }) => {
  const { name, author, imageUrl } = route.params;
  return (
    <Card style={styles.BookDetailsCard} >
      <Card.Title title={name} subtitle={author}  />
      <Card.Cover source={imageUrl} />
      <Card.Content>
        <Title>Summary</Title>
        <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, in delectus impedit nam, sint eaque id, doloribus porro a officia dicta repellat consequatur amet sequi quisquam vel optio quam maxime....</Paragraph>
        <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, in delectus impedit nam, sint eaque id, doloribus porro a officia dicta repellat consequatur amet sequi quisquam vel optio quam maxime....</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Add To WishList</Button>
        <Button>Read Now</Button>
      </Card.Actions>
    </Card>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  BookDetailsCard:{
    // flex:1,
    margin:15,
    paddingHorizontal:10,
    paddingTop:10,
    paddingBottom:42,
    elevation:10
  }
});

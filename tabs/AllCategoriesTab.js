import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { globalStyles } from "../global/globalStyles";
import { categories } from "../data/Categories";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Title } from "react-native-paper";

const AllCategories = () => {
  return (
    <View style={globalStyles.container}>
      <Title style={globalStyles.title} >All Categories</Title>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryCard}>
            <View style={styles.categoryCardContent}>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AllCategories;

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
});

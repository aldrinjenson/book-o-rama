import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SearchBar = ({ setValue, placeholder }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    setValue(query);
  };

  return (
    <View style={styles.searchBar}>
      <TextInput
        // style={styles.TextInput}
        placeholder={placeholder}
        value={query}
        onChangeText={(value) => setQuery(value)}
      />
      <MaterialIcons name="search" size={25} onPress={handleSubmit} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 28,
    width: "85%",
    justifyContent: "space-around",
    padding: 5,
    marginVertical: 20,
    alignSelf: "center",
  },
});

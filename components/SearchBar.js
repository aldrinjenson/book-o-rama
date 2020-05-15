import React, { useState } from "react";
import { StyleSheet, View, TextInput, Keyboard } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SearchBar = ({ setValue, placeholder }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    setValue(query);
    Keyboard.dismiss()
};

  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder={placeholder}
        value={query}
        onChangeText={(value) => setQuery(value)}
      />
      <MaterialIcons name="search" size={25} onPress={handleSubmit} style={styles.icon} />
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
    width: "95%",
    justifyContent: "space-around",
    paddingVertical: 5,
    marginVertical: 20,
    alignSelf: "center",
  },
  icon:{
    paddingHorizontal: 18,
    paddingVertical: 4,
    paddingRight:8
  }
});

import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { globalStyles } from "../global/globalStyles";
import SearchBar from "../components/SearchBar";
import BookCollection from "../components/BookCollection";
import { collections } from "../data/CollectionList";
import { Modal, Portal, Text, Button } from "react-native-paper";
import { FAB } from "react-native-paper";

const HomeTab = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ ...globalStyles.container, justifyContent: "flex-start" }}>
      
      <Portal>
        <Modal visible={visible} onDismiss={() => setVisible(false)}>
          <SearchBar />
        </Modal>
      </Portal>

      <FlatList
        data={collections}
        renderItem={({ item }) => (
          <BookCollection
            key={item.key}
            collection={item}
            navigation={navigation}
          />
        )}
      />
      <FAB icon="magnify" style={styles.fab} onPress={()=>setVisible(true)}  />
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

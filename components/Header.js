import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({navigation}) => {
  return (
    <View style={styles.headerBg}>
      <MaterialIcons onPress={()=>navigation.openDrawer()} name="menu" size={28} style={styles.icon} />
      <Text style={styles.headerTitle} >Book-o-Rama</Text>
      <MaterialIcons name="person" size={28} style={styles.icon} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerBg: {
    width: Dimensions.get("screen").width - 30,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between'
    
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
    alignSelf:'center'
  },
  icon: {

  }
});

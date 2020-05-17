import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

const Header = ({navigation, title}) => {
  return (
    <View style={styles.headerBg}>
           <Icon onPress={()=>navigation.openDrawer()} name="menu" size={32} style={styles.icon} />
      <Text style={styles.headerTitle} >{title}</Text>
      {/*      <Icon name="book" size={32} style={styles.icon} /> */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerBg: {
    width: Dimensions.get("screen").width - 30,
    // flex: 1,
    // borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:'space-between'
    justifyContent: "center",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#333",
    letterSpacing: 1,
    alignSelf: "center",
  },
  icon: {
    position: "absolute",
    left: 2,
    // borderWidth: 1,
    paddingHorizontal: 13,
    paddingVertical:10
  },
});

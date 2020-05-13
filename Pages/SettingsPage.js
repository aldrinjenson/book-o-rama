import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../global/globalStyles";

const SettingsPage = () => {
  return (
    <View style={globalStyles.container}>
      <View style={styles.settingItem}>
        <Text style={styles.settingItemKey}>Dark Mode</Text>
        <Text style={styles.settingItemValue}>Coming Soon...</Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingItemKey}>
          Book Sources
        </Text>
        <Text style={styles.settingItemValue}>Coming Soon...</Text>
      </View>
      <View style={styles.settingItem}>
        <Text style={styles.settingItemKey}>
          Display No. of pages if available?
        </Text>
        <Text style={styles.settingItemValue}>Coming Soon...</Text>
      </View>
    </View>
  );
};

export default SettingsPage;

const styles = StyleSheet.create({
  settings: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    margin: 7,
    padding: 5,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#999",
    marginTop: 9,
    padding: 8,
  },
  settingItemKey: {
    flex: 1,
    // fontWeight: "bold",
  },
  settingItemValue: {
    color: "red",
  },
});

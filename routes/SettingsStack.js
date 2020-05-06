import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsPage from "../drawers/SettingsPage";

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsScreen" component={SettingsPage} />
    </Stack.Navigator>
  );
};

export default SettingsStack;

const styles = StyleSheet.create({});

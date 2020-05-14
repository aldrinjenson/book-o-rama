import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsPage from "../Pages/SettingsPage";

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsPage} />
    </Stack.Navigator>
  );
};

export default SettingsStack;

const styles = StyleSheet.create({});

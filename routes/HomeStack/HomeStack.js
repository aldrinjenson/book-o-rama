import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeTabStack from "./HomeTabStack";
import Header from "../../components/Header";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabStack"
        component={HomeTabStack}
        options={({navigation}) => ({
          headerTitle: () => <Header navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootDrawerNavigator } from "./routes/RootDrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <RootDrawerNavigator />
    </NavigationContainer>
  );
}

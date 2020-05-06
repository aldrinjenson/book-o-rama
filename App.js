import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootDrawerNavigator } from "./routes/RootDrawerNavigator";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <RootDrawerNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
}

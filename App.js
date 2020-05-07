import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootDrawerNavigator } from "./routes/RootDrawerNavigator";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  // dark:true,
  // colors:{
  //   ...DefaultTheme.colors,
  //   primary:'#2ab'
  // }
}

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme} >
        <RootDrawerNavigator />
      </PaperProvider>
    </NavigationContainer>
  );
}

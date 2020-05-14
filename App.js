import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootDrawerNavigator } from "./routes/RootDrawerNavigator";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import WishListContextProvider, { WishListContext } from "./contexts/wishListContext";
const theme = {
  ...DefaultTheme,
  // dark:true,
  // colors:{
  //   ...DefaultTheme.colors,
  //   primary:'#2ab'
  // }
};

export default function App() {
  return (
    <NavigationContainer>
      <WishListContextProvider>
        <PaperProvider theme={theme}>
          <RootDrawerNavigator />
        </PaperProvider>
      </WishListContextProvider>
    </NavigationContainer>
  );
}

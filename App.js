import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootDrawerNavigator } from "./routes/RootDrawerNavigator";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import WishListContextProvider from "./contexts/wishListContext";
// import * as firebase from 'firebase'
// import firebaseConfig from "./config/firebaseConfig";

// firebase.initializeApp(firebaseConfig)

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

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootDrawerNavigator} from './routes/RootDrawerNavigator';
import {Provider as PaperProvider} from 'react-native-paper';
import WishListContextProvider from './contexts/wishListContext';

export default function App() {
  return (
    <NavigationContainer>
      <WishListContextProvider>
        <PaperProvider>
          <RootDrawerNavigator />
        </PaperProvider>
      </WishListContextProvider>
    </NavigationContainer>
  );
}

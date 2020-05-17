import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootDrawerNavigator} from './routes/RootDrawerNavigator';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import WishListContextProvider, {
} from './contexts/wishListContext';
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






// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Hello world</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     flex: 1,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;

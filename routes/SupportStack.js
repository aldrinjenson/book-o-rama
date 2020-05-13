import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import SupportPage from "../Pages/SupportPage";

const Stack = createStackNavigator()

const SupportStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Support" component={SupportPage} />
    </Stack.Navigator>
  );
};

export default SupportStack;

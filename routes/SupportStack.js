import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import SupportPage from "../Pages/SupportPage";
import Header from "../components/Header";

const Stack = createStackNavigator()

const SupportStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Support"
        component={SupportPage}
        options={({ navigation }) => ({
          headerTitle: () => (
            <Header navigation={navigation} title="Support Developer" />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default SupportStack;

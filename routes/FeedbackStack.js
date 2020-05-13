import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FeedbackPage from "../Pages/FeedbackPage";

const Stack = createStackNavigator();

const FeedbackStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feedback" component={FeedbackPage} />
    </Stack.Navigator>
  );
};

export default FeedbackStack;

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTab from "../../tabs/HomeTab";
import MyReadingList from "../../tabs/MyReadingListTab";
import AllCategories from "../../tabs/AllCategoriesTab";

const Tab = createBottomTabNavigator();

const HomeTabStack = () => (
  <Tab.Navigator>
    <Tab.Screen name="HomeTab" component={HomeTab} />
    <Tab.Screen name="ReadingList" component={MyReadingList} />
    <Tab.Screen name="AllCategories" component={AllCategories} />
  </Tab.Navigator>
);

export default HomeTabStack;

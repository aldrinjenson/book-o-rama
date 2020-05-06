import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTab from "../../tabs/HomeTab";
import MyReadingList from "../../tabs/MyReadingListTab";
import AllCategories from "../../tabs/AllCategoriesTab";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HomeTabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarIcon: () => <MaterialIcons name="home" size={23} />,
        }}
      />
      <Tab.Screen
        name="ReadingList"
        component={MyReadingList}
        options={{
          tabBarIcon: () => <MaterialIcons name="book" size={23} />,
        }}
      />
      <Tab.Screen
        name="AllCategories"
        component={AllCategories}
        options={{
          tabBarIcon: () => <MaterialIcons name="list" size={23} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabStack;

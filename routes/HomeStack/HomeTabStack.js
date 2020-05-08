import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTab from "../../tabs/HomeTab";
import AllCategories from "../../tabs/AllCategoriesTab";
import { MaterialIcons } from "@expo/vector-icons";
import SearchBooks from "../../tabs/SearchBooksTab";

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
        name="SearchBooks"
        component={SearchBooks}
        options={{
          tabBarIcon: () => <MaterialIcons name="search" size={23} />,
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

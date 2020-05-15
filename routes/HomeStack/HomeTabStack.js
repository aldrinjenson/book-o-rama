import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTab from "../../tabs/HomeTab";
import { MaterialIcons } from "@expo/vector-icons";
import SearchBooks from "../../tabs/SearchBooksTab";
import WishList from "../../tabs/WishList";

const Tab = createBottomTabNavigator();

const HomeTabStack = () => {
  return (
    <Tab.Navigator
    // initialRouteName='SearchBooks'
    >
      <Tab.Screen
        name="Best Sellers"
        component={HomeTab}
        options={{
          tabBarIcon: () => <MaterialIcons name="home" size={23} />,
        }}
      />
      <Tab.Screen
        name="Search Books"
        component={SearchBooks}
        options={{
          tabBarIcon: () => <MaterialIcons name="search" size={23} />,
        }}
      />
      <Tab.Screen
        name="Wish List"
        component={WishList}
        options={{
          tabBarIcon: () => <MaterialIcons name="bookmark" size={23} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabStack;

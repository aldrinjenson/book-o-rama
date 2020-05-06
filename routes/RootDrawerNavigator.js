import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./HomeStack/HomeStack";
import AboutStack from "./AboutStack";
import SettingsStack from "./SettingsStack";
import ProfileStack from "./ProfileStack";

const Drawer = createDrawerNavigator();

export const RootDrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="HomeStack" component={HomeStack} />
    <Drawer.Screen name="AboutStack" component={AboutStack} />
    <Drawer.Screen name="SettingsStack" component={SettingsStack} />
    <Drawer.Screen name="ProfileStack" component={ProfileStack} />
  </Drawer.Navigator>
);

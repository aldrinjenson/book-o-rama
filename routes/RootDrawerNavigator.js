import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./HomeStack/HomeStack";
import SettingsStack from "./SettingsStack";
import FeedbackStack from "./FeedbackStack";
import SupportStack from "./SupportStack";

const Drawer = createDrawerNavigator();

export const RootDrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="HomeStack" component={HomeStack} />
    <Drawer.Screen name="Support Developer" component={SupportStack} />
    <Drawer.Screen name="SettingsStack" component={SettingsStack} />
    <Drawer.Screen name="Feedback" component={FeedbackStack} />
  </Drawer.Navigator>
);

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainTabNavigator from "./BottomTab";

export type MainStackParamList = {
  MainTabs: undefined; // Replace HomeScreen with MainTabs
};

const MainStack = createStackNavigator<MainStackParamList>();

const MainNavigation = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabNavigator} />
    </MainStack.Navigator>
  );
};

export default MainNavigation;

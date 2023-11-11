import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens";

export type MainStackParamList = {
    HomeScreen: undefined;
}

const MainStack = createStackNavigator<MainStackParamList>();

const MainNavigation = () => {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <MainStack.Screen name="HomeScreen" component={HomeScreen} />
        </MainStack.Navigator>
    )
}

export default MainNavigation;
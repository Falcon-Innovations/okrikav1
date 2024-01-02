import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import { CartScreen, FouriteScreen, HomeScreen, Messages } from "../screens";
import ProfileScreen from "../screens/account/ProfileScreen";
import { COLORS } from "../constants/styles";
import { View } from "react-native";

export type TabStackParamList = {
  HomeScreen: undefined;
  FouriteScreen: undefined;
  ProfileScreen: undefined;
  Messages: undefined;
  CartScreen: undefined;
};

interface TabIconProps {
  name: string;
  color: string;
  size: number;
  focused: boolean;
}

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabIcon: React.FC<TabIconProps> = ({ name, color, size, focused }) => {
  // Customize the background and color based on the focused state
  const backgroundColor = focused ? COLORS.white : COLORS.gray.gray_500;
  const iconColor = focused
    ? COLORS.gray.gray_500
    : COLORS.textColor.text_color_100;

  return (
    <View
      style={{
        backgroundColor,
        borderRadius: 25,
        // padding: 10,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Feather
        name={name as keyof typeof Feather.glyphMap}
        size={size}
        color={iconColor}
      />
    </View>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: COLORS.gray.gray_500,
          borderRadius: 50,
          height: 65,
          alignItems: "center",
          alignContent: "center",
        },
        tabBarIconStyle: {
          width: 20,
          height: 209,
        },
        headerShadowVisible: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon name="home" color={color} size={size} focused={focused} />
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              name="shopping-cart"
              color={color}
              size={size}
              focused={focused}
            />
          ),
        }}
        name="CartScreen"
        component={CartScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon name="heart" color={color} size={size} focused={focused} />
          ),
        }}
        name="FouriteScreen"
        component={FouriteScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              name="message-circle"
              color={color}
              size={size}
              focused={focused}
            />
          ),
        }}
        name="Messages"
        component={Messages}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon name="user" color={color} size={size} focused={focused} />
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

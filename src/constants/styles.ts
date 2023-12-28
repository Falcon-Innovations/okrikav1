import { Dimensions } from "react-native";

const SIZES = {
  buttonBorderRadius: 25,
  buttonHeight: 45,

  borderRadius: 12,
  borderWidth: 1,

  screenPadding: 20,

  screenWidth: Dimensions.get("window").width,
  screenHeight: Dimensions.get("window").height,
};

const COLORS = {
  primary: {
    primary_50: "#f1edeb",
    primary_100: "#d3c8c1",
    primary_200: "#bdaea3",
    primary_300: "#9f897a",
    primary_400: "#8d7260",
    primary_500: "#704f38",
    primary_600: "#664833",
    primary_700: "#503828",
    primary_800: "#3e2b1f",
    primary_900: "#2f2118",
  },

  gray: {
    gray_50: "#e9f9f5",
    gray_100: "#baece1",
    gray_200: "#98e3d2",
    gray_300: "#69d6bd",
    gray_400: "#4cceb1",
    gray_500: "#1fc29d",
    gray_600: "#1cb18f",
    gray_700: "#168a6f",
    gray_800: "#116b56",
    gray_900: "#0d5142",
  },
  textColor: {
    text_color_50: "#f1f3fb",
    text_color_100: "#d4d9f2",
    text_color_200: "#bfc7eb",
    text_color_300: "#a2aee2",
    text_color_400: "#909edd",
    text_color_500: "#7486d4",
    text_color_600: "#6a7ac1",
    text_color_700: "#525f97",
    text_color_800: "#404a75",
    text_color_900: "#313859",
  },

  red: {
    red_50: "#fbefee",
    red_100: "#f3cccc",
    red_200: "#edb3b3",
    red_300: "#e49090",
    red_400: "#df7b7a",
    red_500: "#d75a59",
    red_600: "#c45251",
    red_700: "#99403f",
    red_800: "#763231",
    red_900: "#5a2625",
  },
  neutral: {
    neutral_50: "#e6e6e7",
    neutral_100: "#b0b0b4",
    neutral_200: "#8a8a90",
    neutral_300: "#54555d",
    neutral_400: "#33343d",
    neutral_500: "#00010d",
    neutral_600: "#00010c",
    neutral_700: "#000109",
    neutral_800: "#000107",
    neutral_900: "#000005",
  },

  white: "#FFFFFF",
  black: "#010402",
};

export { SIZES, COLORS };

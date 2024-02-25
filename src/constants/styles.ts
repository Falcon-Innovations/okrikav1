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
    gray_50: "#e9e9ea",
    gray_100: "#bababd",
    gray_200: "#98989d",
    gray_300: "#696a70",
    gray_400: "#4c4d54",
    gray_500: "#1f2029",
    gray_600: "#1c1d25",
    gray_700: "#16171d",
    gray_800: "#111217",
    gray_900: "#0d0d11",
  },
  textColor: {
    text_color_50: "#f1f3fb",
    text_color_100: "#c8c8c8",
    text_color_200: "#adadad",
    text_color_300: "#888788",
    text_color_400: "#717071",
    text_color_500: "#4d4c4d",
    text_color_600: "#464546",
    text_color_700: "#373637",
    text_color_800: "#2a2a2a",
    text_color_900: "#202020",
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

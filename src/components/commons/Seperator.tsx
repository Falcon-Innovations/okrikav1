import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/styles";

interface SeperatorProps {
  text?: string;
}

const Seperator: React.FC<SeperatorProps> = ({ text }) => {
  return (
    <View style={styles.seperatorView}>
      <View style={styles.seperator} />
      <Text style={styles.seperatorText}>{text}</Text>
      <View style={styles.seperator} />
    </View>
  );
};

export default Seperator;

const styles = StyleSheet.create({
  seperatorView: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },
  seperatorText: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.textColor.text_color_500,
  },
  seperator: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.gray.gray_100,
    marginHorizontal: 10,
  },
});

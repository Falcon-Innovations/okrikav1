import React from "react";
import { View, ActivityIndicator, StyleSheet, Modal } from "react-native";
import { useWindowDimensions } from "react-native";
import { COLORS } from "../../constants/styles";

function Loader({ visible = false }) {
  const { width, height } = useWindowDimensions();

  return (
    <View style={[styles.container, { height, width }]}>
      <ActivityIndicator size="large" color={COLORS.primary.primary_500} />
    </View>
  );
}

const styles = StyleSheet.create({
  //   loader: {
  //     height: 70,
  //     width: 70,
  //     backgroundColor: "#fff",
  //     borderRadius: 5,
  //     flexDirection: "row",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     paddingHorizontal: 20,
  //   },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

export default Loader;

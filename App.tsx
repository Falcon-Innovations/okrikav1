import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

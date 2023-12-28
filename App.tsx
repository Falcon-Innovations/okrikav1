import "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import Navigation from "./src/navigation/Navigation";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Lato_Black: require("./assets/fonts/Lato-Black.ttf"),
    Lato_Bold: require("./assets/fonts/Lato-Bold.ttf"),
    Lato_Regular: require("./assets/fonts/Lato-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
}

import "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
}

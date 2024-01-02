import React, { useEffect, useState } from "react";
import { PaperProvider } from "react-native-paper";
import Navigation from "./src/navigation/Navigation";
import { Loader } from "./src/components/commons";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const loadingTimeout = setTimeout(() => {
      setLoading(false);

      // Simulate fetching user status
      // You can replace this with your actual logic to get the user status
      setUser(true); // Set to true for testing purposes, replace with actual logic
    }, 6000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <PaperProvider>
      {loading ? <Loader visible={true} /> : <Navigation user={user} />}
    </PaperProvider>
  );
}

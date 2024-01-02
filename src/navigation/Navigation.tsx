import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { navigationRef } from "./RootNavigation";
import AuthNavigation from "./AuthNavigation";
import MainNavigation from "./MainNavigation";

const Navigation = () => {
  const user = true;

  return (
    <NavigationContainer ref={navigationRef}>
      {user ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default Navigation;

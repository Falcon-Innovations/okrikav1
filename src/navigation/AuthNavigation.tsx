import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useOnboardingStatus } from "../hooks";

import { Onboarding, Register } from "../screens";


export type AuthStackParamList = {
    Onboarding: undefined;
    Register: undefined;
}

const AuthStack = createStackNavigator<AuthStackParamList>();
const AuthNavigation = () => {

    const {isFirstLaunch, checkIfFirstLaunch, isLoading} = useOnboardingStatus();

    if(isLoading) return null;


    return (
        <AuthStack.Navigator
            initialRouteName={isFirstLaunch ? "Onboarding" : "Register"}
            screenOptions={{
                headerShown: false
            }}
        >
            <AuthStack.Screen name="Onboarding" component={Onboarding} />
            <AuthStack.Screen name="Register" component={Register} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigation;


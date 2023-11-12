import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useOnboardingStatus } from "../hooks";

import { Onboarding, Register, Login } from "../screens";


export type AuthStackParamList = {
    Onboarding: undefined;
    Register: undefined;
    Login: undefined;

}

const AuthStack = createStackNavigator<AuthStackParamList>();
const AuthNavigation = () => {

    const {isFirstLaunch, isLoading} = useOnboardingStatus();

    if(isLoading) return null;


    return (
        <AuthStack.Navigator
            initialRouteName={"Onboarding"}
            screenOptions={{
                headerShown: false
            }}
        >
            <AuthStack.Screen name="Onboarding" component={Onboarding} />
            <AuthStack.Screen name="Register" component={Register} />
            <AuthStack.Screen name="Login" component={Login} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigation;


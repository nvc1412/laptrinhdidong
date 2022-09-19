import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../screens/Login";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="SignUpScreen" component={Signin} />
        <Stack.Screen name="HomeTab" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;

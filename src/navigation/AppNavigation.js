import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../screens/Login";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import ForgotPassword from "../screens/ForgotPassword";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

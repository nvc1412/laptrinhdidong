import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import GioiThieu from "../screens/GioiThieu";
import DangNhap from "../screens/DangNhap";
import DangKy from "../screens/DangKy";
import QuenMatKhau from "../screens/QuenMatKhau";
import Products from "../screens/Products";
import Home from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CaiDat from "../screens/CaiDat";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Image
              style={{ height: 30, width: 30 }}
              resizeMode="stretch"
              source={require("../../assets/iconhome.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: () => (
            <Image
              style={{ height: 30, width: 40 }}
              resizeMode="stretch"
              source={require("../../assets/iconproduct.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cài Đặt"
        component={CaiDat}
        options={{
          tabBarIcon: () => (
            <Image
              style={{ height: 30, width: 30 }}
              resizeMode="stretch"
              source={require("../../assets/iconcaidat.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Giới thiệu">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Giới Thiệu"
        component={GioiThieu}
      />
      <Stack.Screen name="Đăng Nhập" component={DangNhap} />
      <Stack.Screen name="Đăng Ký" component={DangKy} />
      <Stack.Screen name="Quên Mật Khẩu" component={QuenMatKhau} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Cài Đặt" component={CaiDat} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeTabs"
        component={MyTabs}
      />
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

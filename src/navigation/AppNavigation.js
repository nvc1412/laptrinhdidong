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
import Profile from "../screens/Profile";
import { Image } from "react-native";
import ChiTietSP from "../screens/ChiTietSP";
import GioHang from "../screens/GioHang";
import Search from "../screens/Search";

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
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Image
              style={{ height: 30, width: 30 }}
              resizeMode="stretch"
              source={require("../../assets/iconprofile.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="GioHang"
        component={GioHang}
        options={{
          tabBarIcon: () => (
            <Image
              style={{ height: 30, width: 30 }}
              resizeMode="stretch"
              source={require("../../assets/icongiohang.png")}
            />
          ),
          tabBarBadge: 0,
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
      <Stack.Screen name="Chi tiết sản phẩm" component={ChiTietSP} />
      <Stack.Screen name="Kết quả tìm kiếm" component={Search} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Giỏ hàng" component={GioHang} />
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

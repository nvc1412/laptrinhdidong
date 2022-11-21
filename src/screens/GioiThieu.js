import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import MainButton from "../components/MainButton";
import MainLogo from "../components/MainLogo";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import SplashScreen from "./SplashScreen";

export default function GioiThieu({ navigation }) {
  const [isLoading, setisLoading] = useState(true);

  function goDangNhap() {
    navigation.navigate("Đăng Nhập");
  }
  function goDangKy() {
    navigation.navigate("Đăng Ký");
  }

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 4500);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  } else {
    return (
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.main}
      >
        <StatusBar style="auto" />

        <Image source={require("../../assets/logo.png")} />

        <MainLogo title="STORE MOBILE" />

        <Text style={{ marginTop: 30, textAlign: "center" }}>
          {`Chào mừng bạn đến với STORE MOBILE\nHãy đăng nhập hoặc đăng ký tài khoản để mua sắm\n☺☺☺☺`}
        </Text>

        <MainButton title={"Đăng Nhập"} onPress={goDangNhap} />

        <MainButton
          backgroundColor={{ backgroundColor: "#fff" }}
          color={{ color: "#3975e8" }}
          title={"Đăng Ký"}
          onPress={goDangKy}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

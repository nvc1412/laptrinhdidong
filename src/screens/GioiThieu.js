import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import MainButton from "../components/MainButton";
import MainLogo from "../components/MainLogo";
import React from "react";

export default function GioiThieu({ navigation }) {
  function goDangNhap() {
    navigation.navigate("Đăng Nhập");
  }
  function goDangKy() {
    navigation.navigate("Đăng Ký");
  }
  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      style={styles.main}
    >
      <Image source={require("../../assets/logo.png")} />

      <MainLogo title="APP MOBILE NEWS" />

      <Text style={{ marginTop: 30, textAlign: "center" }}>
        {`Chào mừng bạn đến với APP MOBILE\nHãy đăng nhập hoặc đăng ký tài khoản để mua sắm\n☺☺☺☺`}
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

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

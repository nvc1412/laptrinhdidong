import { StyleSheet, Text, View, Image } from "react-native";
import MainButton from "../components/MainButton";
import MainLogo from "../components/MainLogo";
import React from "react";

export default function Login({ navigation }) {
  function goSignin() {
    navigation.navigate("Signin");
  }
  function goSignup() {
    navigation.navigate("Signup");
  }
  return (
    <View style={styles.main}>
      <Image source={require("../../assets/login.png")} />

      <MainLogo title="Welcome to your" />

      <Text style={{ marginTop: 30, textAlign: "center" }}>
        Welcome to your app. Build your own social network in minutes.
      </Text>

      <MainButton title={"Log In"} onPress={goSignin} />

      <MainButton
        backgroundColor={{ backgroundColor: "#fff" }}
        color={{ color: "#3975e8" }}
        title={"Sign Up"}
        onPress={goSignup}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f8f8ff",
    alignItems: "center",
    justifyContent: "center",
  },
});

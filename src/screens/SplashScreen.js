import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  ImageBackground,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function SplashScreen() {
  const heightScreen = Dimensions.get("window").height;
  const topMotion = useRef(new Animated.Value(0)).current;
  const botMotion = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(topMotion, {
      toValue: heightScreen / 3.3,
      duration: 3000,
      useNativeDriver: false,
      easing: Easing.bounce,
    }).start();

    Animated.timing(botMotion, {
      toValue: heightScreen / 2.5,
      duration: 900,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <ImageBackground
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
      }}
      source={require("../../assets/hinhnen.png")}
    >
      <StatusBar style="auto" />

      <Animated.Image
        style={{ marginTop: topMotion }}
        source={require("../../assets/logo.png")}
      />
      <Animated.Text
        style={{
          position: "absolute",
          bottom: botMotion,
          color: "white",
          fontSize: 40,
          fontWeight: "bold",
        }}
      >
        STORE MOBILE
      </Animated.Text>
    </ImageBackground>
  );
}

import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useEffect, useState } from "react";

export default function MainFooter(props) {
  const { title, onPress, color, backgroundColor } = props;
  return (
    <View
      style={{
        paddingVertical: 10,
        borderTopWidth: 1,
        backgroundColor: "black",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 20,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Cảm ơn bạn đã sử dụng dịch vụ
      </Text>
      <Image source={require("../../assets/trangtri.gif")} />
      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 55,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity>
          <Image source={require("../../assets/iconfacebook.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../assets/icontwitter.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../assets/iconyoutube.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../assets/iconinstagram.png")} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: "white",
          fontSize: 15,
          textAlign: "center",
          fontWeight: "bold",
          borderTopWidth: 1,
          borderColor: "gray",
          paddingTop: 10,
        }}
      >
        Copyright © All rights reserved.
      </Text>
    </View>
  );
}

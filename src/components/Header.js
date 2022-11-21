import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Header(props) {
  const navigation = useNavigation();
  const { onPress, onChangeText, value } = props;

  //const [textsearch, settextsearch] = useState("");
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <TextInput
        style={styles.textsearch}
        placeholder="Bạn cần tìm gì?"
        onChangeText={onChangeText}
        value={value}
      />
      <TouchableOpacity style={styles.btnsearch} onPress={onPress}>
        <Image
          style={styles.imgsearch}
          resizeMode="stretch"
          source={require("../../assets/icontimkiem.png")}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "green",
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  textsearch: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    borderColor: "gray",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    fontSize: 18,
    backgroundColor: "white",
  },
  btnsearch: {
    backgroundColor: "#738596",
    width: 40,
    height: 40,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  imgsearch: {
    height: 25,
    width: 25,
  },
});

import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

export default function HomeSP(props) {
  const { onPress, img, name } = props;
  return (
    <View>
      <TouchableOpacity style={styles.list} onPress={onPress}>
        <Image
          style={styles.img}
          source={{
            uri: img,
          }}
        ></Image>
        <Text style={{ textAlign: "center" }}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#fff",
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#cccc",
    borderRadius: 13,
    width: 120,
    height: 150,
  },
  img: {
    width: 100,
    height: 100,
  },
});

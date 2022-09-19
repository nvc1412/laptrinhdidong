import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function MainButton(props) {
  const { title, onPress, color, backgroundColor } = props;
  return (
    <TouchableOpacity style={[styles.main, backgroundColor]} onPress={onPress}>
      <Text style={[styles.title, color]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderRadius: 20,
    width: 200,
    height: 50,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#3975e8",
    backgroundColor: "#3975e8",
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    color: "#fff",
  },
});

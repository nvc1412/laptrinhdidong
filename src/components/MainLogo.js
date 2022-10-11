import { Text } from "react-native";
import React from "react";

export default function MainLogo(props) {
  return (
    <Text
      style={{ color: "#EE0000", fontSize: 25, margin: 15, fontWeight: "bold" }}
    >
      {props.title}
    </Text>
  );
}

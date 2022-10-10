import { Text } from "react-native";
import React from "react";

export default function MainLogo(props) {
  return (
    <Text style={{ color: "#FF3333", fontSize: 25, margin: 15 }}>
      {props.title}
    </Text>
  );
}

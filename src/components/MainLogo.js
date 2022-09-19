import { Text } from "react-native";
import React from "react";

export default function MainLogo(props) {
  return (
    <Text style={{ color: "#719ced", fontSize: 25, margin: 15 }}>
      {props.title}
    </Text>
  );
}

import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useEffect, useState } from "react";

export default function MainFooter(props) {
  const { title, onPress, color, backgroundColor } = props;
  return (
    <View
      style={{
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: "#CED0CE",
      }}
    >
      <ActivityIndicator animating size="large" />
    </View>
  );
}

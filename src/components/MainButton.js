import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

export default function MainButton(props) {
  const { txt, backgroundColor, borderColor, txtcolor, onPress } = props;
  return (
    // <View
    //   style={[
    //     styles.main,
    //     {
    //       backgroundColor: props.backgroundColor,
    //       borderColor: props.borderColor,
    //     },
    //   ]}
    // >
    //   <Text style={{ color: props.txtcolor, fontSize: 15, fontWeight: "500" }}>
    //     {props.txt}
    //   </Text>
    // </View>

    <Button
      style={[
        styles.main,
        {
          backgroundColor: props.backgroundColor,
          borderColor: props.borderColor,
          color: props.txtcolor,
          fontSize: 15,
          fontWeight: "500",
        },
      ]}
      title={props.txt}
      onPress={props.onPress}
    ></Button>
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
  },
});

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
} from "react-native";
import React, { memo } from "react";

const ProductSP = (props) => {
  const { onPress, img, name, price } = props;
  return (
    <View style={styles.wrap}>
      <TouchableOpacity style={styles.list} onPress={onPress}>
        <Image
          style={styles.img}
          source={{
            uri: img,
          }}
        ></Image>
        <Text
          style={{
            marginVertical: 7,
            fontSize: 16,
            textAlign: "center",
          }}
        >
          {name}
        </Text>
        <Text style={{ color: "red", fontSize: 20, fontWeight: "bold" }}>
          {price}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.name === nextProps.name &&
    prevProps.price === nextProps.price &&
    prevProps.img === nextProps.img
  );
  // return true => không re-render
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  wrap: {
    flex: 1,
  },
  list: {
    backgroundColor: "#fff",
    margin: 5,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#cccc",
    borderRadius: 5,
    justifyContent: "center",
    height: 250,
  },
  img: {
    width: 150,
    height: 150,
  },
});

export default memo(ProductSP, areEqual);

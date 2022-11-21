import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
} from "react-native";
import React from "react";
import { useEffect, useState } from "react";

const screenWhitdh = Dimensions.get("window").width;

export default function MainBanner(props) {
  const { title, onPress, color, backgroundColor } = props;
  const [imageList, setimageList] = useState([]);
  useEffect(() => {
    const dataimage = [
      {
        image: (
          <Image
            source={require("../../assets/sliders/slider1.png")}
            resizeMode="stretch"
            style={{ width: screenWhitdh, height: "60%" }}
          />
        ),
      },
      {
        image: (
          <Image
            source={require("../../assets/sliders/slider2.png")}
            resizeMode="stretch"
            style={{ width: screenWhitdh, height: "60%" }}
          />
        ),
      },
      {
        image: (
          <Image
            source={require("../../assets/sliders/slider3.png")}
            resizeMode="stretch"
            style={{ width: screenWhitdh, height: "60%" }}
          />
        ),
      },
    ];
    setimageList(dataimage);
  }, []);
  return (
    <View style={{ width: screenWhitdh, height: 120 }}>
      <ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        contentContainerStyle={{
          width: screenWhitdh * imageList.length,
          height: 200,
        }}
      >
        {imageList.map((e, index) => (
          <View key={index.toString()}>{e.image}</View>
        ))}
      </ScrollView>
    </View>
  );
}

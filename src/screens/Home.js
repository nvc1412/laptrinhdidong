import axios from "axios";
import { useEffect, useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function Home({ navigation }) {
  const [data, setdata] = useState([]);

  useEffect(function () {
    fetch("http://192.168.201.188:3000/products/")
      .then((e) => e.json())
      .then((rep) => setdata(rep))
      .catch((err) => {
        setdata([]);
      });
  }, []);

  // const DSProducts = async () => {
  //   try {
  //     const res = await axios.get("http://192.168.201.188:3000/products/");
  //     if (res) {
  //       setdata(res.data);
  //     } else {
  //       console.log("ko có dl");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <FlatList
      style={styles.main}
      data={data}
      keyExtractor={(item, index) => item.id}
      renderItem={(itemData) => (
        <View style={styles.list}>
          <Image
            style={styles.img}
            source={require("../../assets/logo.png")}
          ></Image>
          <Text>{itemData.item.name}</Text>
          <Text>{itemData.item.color}</Text>
          <Text>{itemData.item.price}</Text>
        </View>
      )}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    width: "99%",
    backgroundColor: "red",
  },
  list: {
    backgroundColor: "blue",
    marginTop: 20,
    width: 250,
    height: 300,
    alignItems: "center",
  },
  img: {
    width: 200,
    height: 200,
  },
});

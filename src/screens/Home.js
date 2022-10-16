import axios from "axios";
import { useEffect, useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function Home({ navigation }) {
  const url = "http://192.168.0.104:3000";
  const [data, setdata] = useState([]);

  useEffect(function () {
    fetch(`${url}/products/`)
      .then((e) => e.json())
      .then((rep) => setdata(rep))
      .catch((err) => {
        setdata([]);
      });
  }, []);
  return (
    <FlatList
      style={styles.main}
      //contentContainerStyle={{ flexDirection: "column" }}
      data={data}
      keyExtractor={(item, index) => item.id}
      renderItem={(itemData) => (
        //<View style={styles.main}>
        <View style={styles.list}>
          <Image
            style={styles.img}
            //source={require("../../assets/logo.png")}
            source={{
              uri: `${itemData.item.image}`,
            }}
          ></Image>
          <Text>{itemData.item.name}</Text>
          <Text>{itemData.item.color}</Text>
          <Text>{itemData.item.price}</Text>
        </View>
        //</View>
      )}
      numColumns={2}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // flexDirection: "row",
    // flexWrap: "wrap",
    // justifyContent: "center",
    // alignItems: "center",
    //width: "99%",
    backgroundColor: "#ffff",
  },
  list: {
    backgroundColor: "#fff",
    margin: 5,
    width: 168,
    height: 250,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#cccc",
    borderRadius: 5,
  },
  img: {
    width: 150,
    height: 150,
  },
});

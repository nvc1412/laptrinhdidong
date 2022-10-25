import axios from "axios";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-screens";
import MainFooter from "../components/Footer";
import MainHeader from "../components/Header";

export default function Home({ navigation }) {
  const url = "http://192.168.251.188:3000";
  const [data, setdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   //setIsLoading(true);
  //   fetch(`${url}/products/`)
  //     .then((e) => e.json())
  //     .then((rep) => {
  //       setdata(rep);
  //       //setdata([...data, rep]);
  //       //setIsLoading(false);
  //     })

  //     .catch((err) => {
  //       setdata([]);
  //     });
  // }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${url}/products/${currentPage}`)
      .then((res) => {
        // setdata([...data, res.data]);
        setdata(data.concat(res.data));
        setIsLoading(false);
      })
      .catch((err) => {
        setdata([]);
      });
  }, [currentPage]);

  const renderLoader = () => {
    return isLoading ? (
      <View
        style={{
          marginVertical: 16,
          alignItems: "center",
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    ) : null;
  };

  const LoadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  const goProducts = () => {
    //console.log({itemData.item.id });
    navigation.navigate("Products");

    // if (navigation) {
    //   navigation.navigate("Products", {
    //     itemData.item.id,
    //   });
    // }
  };

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <FlatList
        //style={{ backgroundColor: "red" }}
        ListHeaderComponent={MainHeader}
        data={data}
        numColumns={2}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => (
          <View style={styles.wrap}>
            <TouchableOpacity style={styles.list} onPress={goProducts}>
              <Image
                style={styles.img}
                source={{
                  uri: itemData.item.image,
                }}
              ></Image>
              <Text>{itemData.item.id}</Text>
              <Text>{itemData.item.name}</Text>
              <Text>{itemData.item.color}</Text>
              <Text>{itemData.item.price}</Text>
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={renderLoader}
        onEndReached={LoadMoreItem}
        onEndReachedThreshold={1}
      />
    </SafeAreaView>
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
    //backgroundColor: "red",
  },
  wrap: {
    flex: 1,
  },
  list: {
    backgroundColor: "#fff",
    margin: 5,
    // width: 168,
    // height: 250,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#cccc",
    borderRadius: 5,
  },
  img: {
    width: 150,
    height: 150,
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

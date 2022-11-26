import axios from "axios";
import { memo, useEffect, useMemo, useState } from "react";
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
  Alert,
  TextInput,
} from "react-native";
import MainFooter from "../components/Footer";
import MainHeader from "../components/Banner";
import Header from "../components/Header";
import ProductSP from "../components/ProductSP";
import { useNavigation } from "@react-navigation/native";

export default function Products() {
  const navigation = useNavigation();

  // const url = "http://192.168.0.103:3300";
  const url = "http://app-mobile-store.herokuapp.com";

  const [data, setdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [textsearch, settextsearch] = useState("");

  function format(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    axios
      .get(`${url}/products/page/${currentPage}`)
      .then((res) => {
        if (res.data.length != 0) {
          setdata(data.concat(res.data));
        } else {
          Alert.alert("Bạn đã xem hết sản phẩm!");
        }
      })
      .catch((err) => {
        setdata([]);
      });
  }, [currentPage]);

  const renderLoader = () => {
    return (
      <View
        style={{
          marginVertical: 16,
          alignItems: "center",
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  const LoadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Header
        value={textsearch}
        onChangeText={settextsearch}
        onPress={() =>
          navigation.navigate("Kết quả tìm kiếm", { name: textsearch })
        }
      />

      <FlatList
        data={data}
        initialNumToRender={7}
        numColumns={2}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => (
          <ProductSP
            onPress={() => {
              navigation.navigate("Chi tiết sản phẩm", {
                idDetai: itemData.item.id,
              });
            }}
            img={itemData.item.image}
            name={itemData.item.name}
            price={format(itemData.item.price)}
          />
        )}
        ListFooterComponent={renderLoader}
        onEndReached={LoadMoreItem}
        onEndReachedThreshold={1}
      />
    </>
  );
}

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

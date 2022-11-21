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
import IconQuick from "../components/IconQuick";

export default function Search({ route }) {
  const navigation = useNavigation();

  const url = "http://192.168.0.103:3000";
  const [data, setdata] = useState([]);
  const [datasearch, setdatasearch] = useState([]);

  function format(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    if (route.params.maker == null) {
      axios
        .get(`${url}/products/search/${route.params.name}`)
        .then((res) => {
          setdata(res.data);
        })
        .catch((err) => {
          setdata([]);
        });
    } else {
      axios
        .get(`${url}/products/maker/${route.params.maker}`)
        .then((res) => {
          setdata(res.data);
        })
        .catch((err) => {
          setdata([]);
        });
    }
  }, []);

  return (
    <>
      <View style={styles.icon}>
        <IconQuick
          source={require("../../assets/iconspiphone.png")}
          onPress={() => {
            navigation.replace("Kết quả tìm kiếm", { maker: "iphone" });
          }}
        />
        <IconQuick
          source={require("../../assets/iconspsamsung.png")}
          onPress={() => {
            navigation.replace("Kết quả tìm kiếm", { maker: "samsung" });
          }}
        />
        <IconQuick
          source={require("../../assets/iconspoppo.png")}
          onPress={() => {
            navigation.replace("Kết quả tìm kiếm", { maker: "oppo" });
          }}
        />
        <IconQuick
          source={require("../../assets/iconspvivo.png")}
          onPress={() => {
            navigation.replace("Kết quả tìm kiếm", { maker: "vivo" });
          }}
        />
        <IconQuick
          source={require("../../assets/iconsprealme.png")}
          onPress={() => {
            navigation.replace("Kết quả tìm kiếm", { maker: "realme" });
          }}
        />
        <IconQuick
          source={require("../../assets/iconspxiaomi.png")}
          onPress={() => {
            navigation.replace("Kết quả tìm kiếm", { maker: "xiaomi" });
          }}
        />
      </View>
      {data.length == 0 ? (
        <View>
          <Text style={{ color: "red", fontSize: 15 }}>
            Không tìm thấy kết quả cho "{route.params.name}"
          </Text>
        </View>
      ) : (
        <FlatList
          data={data}
          initialNumToRender={7}
          numColumns={2}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => (
            <ProductSP
              onPress={() => {
                navigation.replace("Chi tiết sản phẩm", {
                  idDetai: itemData.item.id,
                });
              }}
              img={itemData.item.image}
              name={itemData.item.name}
              price={format(itemData.item.price)}
            />
          )}
          //ListFooterComponent={renderFooter}
        />
      )}
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
  icon: {
    backgroundColor: "#F0FFF0",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});

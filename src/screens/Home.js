import axios from "axios";
import React, { useEffect, useState } from "react";
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
  TextInput,
  Dimensions,
  ImageBackground,
  Alert,
} from "react-native";
import MainFooter from "../components/Footer";
import MainBanner from "../components/Banner";
import MainLogo from "../components/MainLogo";
import Header from "../components/Header";
import IconQuick from "../components/IconQuick";
import HomeSP from "../components/HomeSP";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  // const url = "http://192.168.0.103:3300";
  const url = "http://app-mobile-store.herokuapp.com";

  const [dataSale, setdataSale] = useState([]);
  const [dataWorldcup, setdataWorldcup] = useState([]);
  const [dataTop, setdataTop] = useState([]);
  const [dataNew, setdataNew] = useState([]);

  const [textsearch, settextsearch] = useState("");

  async function fetchData() {
    try {
      const res1 = await axios.get(`${url}/products/page/1`);
      setdataSale(res1.data);
      const res2 = await axios.get(`${url}/products/page/2`);
      setdataWorldcup(res2.data);
      const res3 = await axios.get(`${url}/products/page/3`);
      setdataTop(res3.data);
      const res4 = await axios.get(`${url}/products/page/4`);
      setdataNew(res4.data);
    } catch (error) {
      setdataSale([]);
      setdataWorldcup([]);
      setdataTop([]);
      setdataNew([]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header
        value={textsearch}
        onChangeText={settextsearch}
        onPress={() =>
          navigation.navigate("Kết quả tìm kiếm", { name: textsearch })
        }
      />

      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Chức năng đang hoàn thiện!");
            }}
          >
            <Image
              resizeMode="stretch"
              source={require("../../assets/iconmenu.png")}
            />
          </TouchableOpacity>
          <Text style={styles.logo}>STORE MOBILE</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("GioHang");
            }}
          >
            <Image
              resizeMode="stretch"
              source={require("../../assets/icongiohang.png")}
            />
          </TouchableOpacity>
        </View>

        <MainBanner />

        <View
          style={{
            backgroundColor: "#fff",
            padding: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/gioithieu.png")} />

            <Text
              style={{
                color: "black",
                fontSize: 28,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Giới Thiệu
            </Text>
            <Image source={require("../../assets/gioithieu.png")} />
          </View>
          <Text style={{ textAlign: "center", fontSize: 14 }}>
            STORE MOBILE tổng hợp các mẫu điện thoại được ưa chuộng nhất hiện
            nay với giá thành vô cùng hợp lý.
          </Text>
          <Text style={{ textAlign: "center", fontSize: 14 }}>
            Quý khách hàng hãy nhanh tay sở hữu ngay hôm nay để đừng bỏ lỡ những
            ưu đãi hấp dẫn.
          </Text>
        </View>

        <View style={styles.icon}>
          <IconQuick
            source={require("../../assets/iconspiphone.png")}
            onPress={() => {
              navigation.navigate("Kết quả tìm kiếm", { maker: "iPhone" });
            }}
          />
          <IconQuick
            source={require("../../assets/iconspsamsung.png")}
            onPress={() => {
              navigation.navigate("Kết quả tìm kiếm", { maker: "SamSung" });
            }}
          />
          <IconQuick
            source={require("../../assets/iconspoppo.png")}
            onPress={() => {
              navigation.navigate("Kết quả tìm kiếm", { maker: "OPPO" });
            }}
          />
          <IconQuick
            source={require("../../assets/iconspvivo.png")}
            onPress={() => {
              navigation.navigate("Kết quả tìm kiếm", { maker: "Vivo" });
            }}
          />
          <IconQuick
            source={require("../../assets/iconsprealme.png")}
            onPress={() => {
              navigation.navigate("Kết quả tìm kiếm", { maker: "Realme" });
            }}
          />
          <IconQuick
            source={require("../../assets/iconspxiaomi.png")}
            onPress={() => {
              navigation.navigate("Kết quả tìm kiếm", { maker: "Xiaomi" });
            }}
          />
        </View>

        <View style={{ backgroundColor: "#201ce1", marginVertical: 5 }}>
          <Image
            style={{
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").width / 10,
            }}
            resizeMode="stretch"
            source={require("../../assets/sale.png")}
          />
          <FlatList
            horizontal={true}
            data={dataSale}
            keyExtractor={(item, index) => item.id}
            renderItem={(itemData) => (
              <HomeSP
                onPress={() => {
                  navigation.navigate("Chi tiết sản phẩm", {
                    idDetai: itemData.item.id,
                  });
                }}
                img={itemData.item.image}
                name={itemData.item.name}
              />
            )}
          />
        </View>
        <View style={{ backgroundColor: "#081962", marginVertical: 5 }}>
          <Image
            style={{
              width: Dimensions.get("window").width,
              height: Dimensions.get("window").width / 10,
            }}
            resizeMode="stretch"
            source={require("../../assets/worldcup.png")}
          />
          <FlatList
            horizontal={true}
            data={dataWorldcup}
            keyExtractor={(item, index) => item.id}
            renderItem={(itemData) => (
              <HomeSP
                onPress={() => {
                  navigation.navigate("Chi tiết sản phẩm", {
                    idDetai: itemData.item.id,
                  });
                }}
                img={itemData.item.image}
                name={itemData.item.name}
              />
            )}
          />
        </View>

        <View style={{ backgroundColor: "#000723", marginVertical: 5 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/hot.gif")} />
            <Text
              style={{
                color: "red",
                fontSize: 25,
                textAlign: "center",
                fontWeight: "bold",
                marginHorizontal: 10,
              }}
            >
              Top điện thoại bán chạy
            </Text>
            <Image source={require("../../assets/hot.gif")} />
          </View>
          <FlatList
            horizontal={true}
            data={dataTop}
            keyExtractor={(item, index) => item.id}
            renderItem={(itemData) => (
              <HomeSP
                onPress={() => {
                  navigation.navigate("Chi tiết sản phẩm", {
                    idDetai: itemData.item.id,
                  });
                }}
                img={itemData.item.image}
                name={itemData.item.name}
              />
            )}
          />
        </View>
        <View
          style={{
            backgroundColor: "#fcb7a0",
            marginVertical: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/new.gif")} />

            <Text
              style={{
                color: "green",
                fontSize: 25,
                textAlign: "center",
                fontWeight: "bold",
                marginHorizontal: 10,
              }}
            >
              Điện thoại mới về
            </Text>
            <Image source={require("../../assets/new.gif")} />
          </View>
          <FlatList
            horizontal={true}
            data={dataNew}
            keyExtractor={(item, index) => item.id}
            renderItem={(itemData) => (
              <HomeSP
                onPress={() => {
                  navigation.navigate("Chi tiết sản phẩm", {
                    idDetai: itemData.item.id,
                  });
                }}
                img={itemData.item.image}
                name={itemData.item.name}
              />
            )}
          />
        </View>

        <MainFooter />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  logo: {
    textShadowOffset: {
      height: 3,
      width: 3,
    },
    textShadowColor: "gray",
    textShadowRadius: 8,
    color: "#EE0000",
    fontSize: 25,
    margin: 15,
    fontWeight: "bold",
  },
  icon: {
    backgroundColor: "#F0FFF0",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});

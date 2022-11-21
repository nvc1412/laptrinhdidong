import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HomeSP from "../components/HomeSP";

export default function ChiTietSP({ route }) {
  const navigation = useNavigation();

  const url = "http://192.168.0.103:3000";
  const [data, setdata] = useState([]);
  const [dataSPLQ, setdataSPLQ] = useState([]);

  async function fetchData() {
    try {
      const res = await axios.get(`${url}/products/${route.params.idDetai}`);
      setdata(res.data);
      const res1 = await axios.get(
        `${url}/products/maker/${res.data[0].makers}`
      );
      setdataSPLQ(res1.data);
    } catch (error) {
      setdata([]);
      setdataSPLQ([]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function format(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " VNĐ";
  }
  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id}
        renderItem={(itemData) => (
          <View>
            <View style={styles.main}>
              <Image
                style={styles.img}
                source={{
                  uri: itemData.item.image,
                }}
              ></Image>
              <Text
                style={{
                  marginVertical: 7,
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                {itemData.item.name}
              </Text>
              <Text style={{ color: "red", fontSize: 20, fontWeight: "bold" }}>
                {format(itemData.item.price)}
              </Text>
              <Text>Hãng: {itemData.item.makers}</Text>
              <Text>Màu sắc: {itemData.item.color}</Text>
              <View style={{ marginVertical: 15, marginHorizontal: 10 }}>
                <Text style={{ fontSize: 18, color: "#2f80ed" }}>
                  Thông tin cấu hình sản phẩm:
                </Text>
                <Text
                  style={{ fontSize: 15, color: "#e6650c", marginLeft: 15 }}
                >
                  {itemData.item.info}
                </Text>
              </View>
              <View
                style={{
                  marginHorizontal: 10,
                  marginBottom: 20,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginHorizontal: 5,
                  }}
                >
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                    }}
                    source={require("../../assets/icondoimoi.png")}
                  ></Image>
                  <Text style={{ marginLeft: 25 }}>
                    Hư gì đổi nấy 12 tháng tại 3361 siêu thị toàn quốc (miễn phí
                    tháng đầu)
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginHorizontal: 5,
                  }}
                >
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                    }}
                    source={require("../../assets/iconbaohanh.png")}
                  ></Image>
                  <Text style={{ marginLeft: 25 }}>
                    Bảo hành chính hãng điện thoại 1 năm tại các trung tâm bảo
                    hành hãng
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginHorizontal: 5,
                  }}
                >
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                    }}
                    source={require("../../assets/iconsachhd.png")}
                  ></Image>
                  <Text style={{ marginLeft: 25 }}>
                    Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp
                    Lightning - Type C
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  right: 25,
                  top: 25,
                  backgroundColor: "#2cf9b7",
                  flexDirection: "row",
                  padding: 10,
                  borderRadius: 50,
                  elevation: 10,
                }}
                onPress={() => {
                  // navigation.navigate("Giỏ hàng", {
                  //   idSP: itemData.item.id,
                  // });
                  Alert.alert("Thêm vào giỏ hàng thành công!");
                }}
              >
                <Image
                  style={{ width: 50, height: 50 }}
                  resizeMode="stretch"
                  source={require("../../assets/icongiohang.png")}
                />
              </TouchableOpacity>
            </View>

            <View style={[styles.main, { backgroundColor: "#67bd50" }]}>
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
                  Sản Phẩm Liên Quan
                </Text>
                <Image source={require("../../assets/hot.gif")} />
              </View>
              <FlatList
                horizontal={true}
                data={dataSPLQ}
                keyExtractor={(item, index) => item.id}
                renderItem={(itemData) => (
                  <HomeSP
                    onPress={() => {
                      navigation.replace("Chi tiết sản phẩm", {
                        idDetai: itemData.item.id,
                      });
                    }}
                    img={itemData.item.image}
                    name={itemData.item.name}
                  />
                )}
              />
            </View>
          </View>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#caeeddb3",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  img: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});

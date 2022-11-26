import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";

export default function GioHang({ navigation, route }) {
  const [username, setusername] = useState("");

  const isFocused = useIsFocused();

  // const url = "http://192.168.0.103:3300";
  const url = "http://app-mobile-store.herokuapp.com";

  const [data, setdata] = useState([]);
  const [soluong, setsoluong] = useState(1);

  const getCartData = async () => {
    let cartData = await AsyncStorage.getItem("cartData");
    if (cartData) {
      cartData = JSON.parse(cartData);
      navigation.setOptions({ tabBarBadge: cartData.length });
    } else {
      cartData = [];
      navigation.setOptions({ tabBarBadge: 0 });
    }
    setdata(cartData);
    const res = await AsyncStorage.getItem("nameuser");
    setusername(res);
  };

  useEffect(() => {
    getCartData();
  }, [isFocused]);

  const getThanhTien = () => {
    let thanhtien = 0;
    data.map((value) => (thanhtien += value.price * value.soluong));
    return thanhtien;
  };

  function format(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " VNĐ";
  }

  const ThanhToan = async () => {
    for (let i = 0; i < data.length; i++) {
      const res = await axios.post(`${url}/bills/`, {
        idSP: data[i].id,
        idUS: data[i].iduser,
        tenKH: username,
        tenSP: data[i].name,
        soluong: data[i].soluong,
      });
    }

    AsyncStorage.removeItem("cartData");

    Alert.alert("Thanh toán thành công!");
    getCartData();
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderColor: "#dcd9d9",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#20B2AA",
          }}
        >
          Giỏ Hàng
        </Text>
      </View>

      {data.length > 0 ? (
        <FlatList
          style={{}}
          data={data}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => (
            <>
              <View
                style={{
                  flexDirection: "row",
                  margin: 7,
                  paddingVertical: 7,
                  backgroundColor: "white",
                  elevation: 10,
                  shadowOpacity: 1,
                  borderRadius: 10,
                }}
              >
                <Image
                  style={{ width: 120, height: 120 }}
                  source={{ uri: itemData.item.image }}
                />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                    {itemData.item.name}
                  </Text>
                  <Text>{itemData.item.color}</Text>
                  <Text style={{ color: "red" }}>
                    {format(itemData.item.price)}
                  </Text>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 10,
                      justifyContent: "space-between",
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        backgroundColor: "black",
                        width: 70,
                        height: 40,
                        borderRadius: 8,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onPress={() => {
                        if (itemData.item.soluong > 1) {
                          itemData.item.soluong -= 1;
                          setsoluong(itemData.item.soluong);
                        } else {
                          setsoluong(1);
                        }
                      }}
                    >
                      <Text style={{ color: "white", fontSize: 30 }}>-</Text>
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: 10 }}>
                      {itemData.item.soluong}
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "black",
                        width: 70,
                        height: 40,
                        borderRadius: 8,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      onPress={() => {
                        itemData.item.soluong += 1;
                        setsoluong(itemData.item.soluong);
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 30,
                        }}
                      >
                        +
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ marginHorizontal: 15 }}
                      onPress={() => {
                        const newdata = data.filter(
                          (data) => data.id !== itemData.item.id
                        );
                        setdata(newdata);
                        AsyncStorage.setItem(
                          "cartData",
                          JSON.stringify(newdata)
                        );
                        navigation.setOptions({ tabBarBadge: newdata.length });
                      }}
                    >
                      <Image source={require("../../assets/iconxoa.png")} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </>
          )}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "gray", fontSize: 20 }}>
            Giỏ hàng đang trống
          </Text>
        </View>
      )}

      <View
        style={{
          width: "100%",
          height: 120,
          borderTopWidth: 1,
          borderColor: "#dcd9d9",
        }}
      >
        <View
          style={{
            flex: 3,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <Text style={{ flex: 1 }}>Thành tiền:</Text>
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              fontWeight: "bold",
              color: "#48ff00",
            }}
          >
            {format(getThanhTien())}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flex: 4,
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            if (data.length > 0) {
              var bill = "";
              for (let i = 0; i < data.length; i++) {
                bill =
                  bill +
                  `${data[i].name} - Số lượng: ${data[i].soluong} \n \n \t \t`;
              }

              Alert.alert(
                "Xác Nhận Thanh Toán",
                `Thông tin đơn hàng: \n \t Tên khách: ${username} \n \t Sản phẩm: \n \t \t ${bill} \n Tổng tiền: ${format(
                  getThanhTien()
                )}`,
                [
                  {
                    text: "Hủy",
                    style: "cancel",
                  },
                  {
                    text: "OK",
                    onPress: ThanhToan,
                  },
                ]
              );
            } else {
              Alert.alert("Vui lòng thêm sản phẩm để thanh toán!");
            }
          }}
        >
          <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
            Thanh Toán
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

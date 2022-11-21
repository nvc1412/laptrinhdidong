import axios from "axios";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";

export default function GioHang({ navigation, route }) {
  const url = "http://192.168.0.103:3000";
  const [data, setdata] = useState([]);
  const [soluong, setsoluong] = useState(1);
  const [thanhtien, setthanhtien] = useState(0);

  const congSL = () => setsoluong((soluong) => soluong + 1);
  const truSL = () => {
    if (soluong > 1) {
      setsoluong((soluong) => soluong - 1);
    } else {
      setsoluong(1);
    }
  };

  async function fetchData() {
    try {
      //const res = await axios.get(`${url}/products/${route.params.idSP}`);
      const res = await axios.get(`${url}/products/page/1`);
      setdata(res.data);
    } catch (error) {
      setdata([]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
                {/* <Text>{soluong * itemData.item.price}</Text> */}
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                  {itemData.item.name}
                </Text>
                <Text>{itemData.item.color}</Text>
                <Text style={{ color: "red" }}>{itemData.item.price}</Text>
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
                    onPress={truSL}
                  >
                    <Text style={{ color: "white", fontSize: 30 }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ marginHorizontal: 10 }}>{soluong}</Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "black",
                      width: 70,
                      height: 40,
                      borderRadius: 8,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={congSL}
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
                  <TouchableOpacity style={{ marginHorizontal: 15 }}>
                    <Image source={require("../../assets/iconxoa.png")} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        )}
      />
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
            }}
          >
            {thanhtien} vnđ
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flex: 4,
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
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

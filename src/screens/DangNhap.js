import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
import MainLogo from "../components/MainLogo";
import MainInput from "../components/MainInput";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function DangNhap({ navigation }) {
  // const url = "http://192.168.0.103:3300";
  const url = "http://app-mobile-store.herokuapp.com";

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const goToHome = () => {
    if (email.trim() == "" || !email) {
      Alert.alert("Thông báo", "Không được để trống email !");
    } else if (password.trim() == "" || !password) {
      Alert.alert("Thông báo", "Không được để trống mật khẩu !");
    } else {
      login();
    }
  };
  const login = async () => {
    try {
      const res = await axios.get(`${url}/users/email/${email.trim()}`);
      if (res.data.password == password.trim()) {
        AsyncStorage.setItem("iduser", JSON.stringify(res.data.id));
        AsyncStorage.setItem("nameuser", res.data.name);
        AsyncStorage.setItem("emailuser", res.data.email);
        AsyncStorage.setItem("phoneuser", res.data.phone);
        AsyncStorage.setItem("dateuser", res.data.date);
        AsyncStorage.setItem("addressuser", res.data.address);
        navigation.navigate("HomeTabs");
      } else {
        alert("Email hoặc mật khẩu không chính xác!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  function goQuenMatKhau() {
    navigation.navigate("Quên Mật Khẩu");
  }
  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      style={styles.main}
    >
      {/* <MainLogo title="Đăng Nhập" /> */}

      <MainInput placeholder="E-mail" value={email} onChangeText={setemail} />
      <MainInput
        placeholder="Password"
        value={password}
        onChangeText={setpassword}
        password={true}
      />

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MainButton title="Đăng Nhập" onPress={goToHome} />

        <Text style={{ fontSize: 20, color: "#555555", marginTop: 30 }}>
          OR
        </Text>

        <MainButton
          backgroundColor={{ backgroundColor: "#0099FF" }}
          title="Quên mật khẩu"
          onPress={goQuenMatKhau}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 100,
  },
});

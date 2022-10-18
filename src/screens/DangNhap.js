import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
import MainLogo from "../components/MainLogo";
import MainInput from "../components/MainInput";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function DangNhap({ navigation }) {
  const url = "http://192.168.0.104:3000";
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
    // let userData = await AsyncStorage.getItem("userData");
    // if (userData) {
    //   userData = JSON.parse(userData);
    //   let arr = [...userData];
    //   arr = arr.filter(
    //     (value) =>
    //       value.email.toLocaleLowerCase() == email.toLocaleLowerCase() &&
    //       value.password == password
    //   );
    //   if (arr.length > 0) {
    //     let curUser = arr[0];
    //     AsyncStorage.setItem("curUser", JSON.stringify(curUser));
    //     Alert.alert("Đăng nhập thành công!");
    //     //navigation.replace("Login");
    //     navigation.navigate("Products");
    //   } else alert("Email hoặc mật khẩu không chính xác!");
    // } else {
    //   alert("Email hoặc mật khẩu không chính xác!");
    // }

    try {
      const res = await axios.get(`${url}/user/${email.trim()}`);
      if (res.data.password == password.trim()) {
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

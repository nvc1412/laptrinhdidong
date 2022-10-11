import { Alert, ImageBackground, StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
import MainLogo from "../components/MainLogo";
import MainInput from "../components/MainInput";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function DangKy({ navigation }) {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const onGoBack = () => {
    navigation.goBack();
  };
  const onSignUp = () => {
    if (name.trim() == "" || !name) {
      Alert.alert("Thông báo", "Không được để trống họ và tên !");
    } else if (phone.trim() == "" || !phone) {
      Alert.alert("Thông báo", "Không được để trống phone !");
    } else if (email.trim() == "" || !email) {
      Alert.alert("Thông báo", "Không được để trống email !");
    } else if (password.trim() == "" || !password) {
      Alert.alert("Thông báo", "Không được để trống mật khẩu !");
    } else {
      createAccount();
    }
  };

  const createAccount = async () => {
    // let userData = await AsyncStorage.getItem("userData");
    // if (userData) {
    //   userData = JSON.parse(userData);
    //   let arr = [...userData];
    //   arr = arr.filter(
    //     (value) => value.email.toLocaleLowerCase() == email.toLocaleLowerCase()
    //   );
    //   if (arr.length > 0) {
    //     alert("Email already registered!");
    //     return;
    //   } else {
    //     userData.push({
    //       name: name.trim(),
    //       phone: phone.trim(),
    //       email: email.trim(),
    //       password: password.trim(),
    //     });
    //   }
    // } else {
    //   userData = [];
    //   userData.push({
    //     name: name.trim(),
    //     phone: phone.trim(),
    //     email: email.trim(),
    //     password: password.trim(),
    //   });
    // }
    // AsyncStorage.setItem("userData", JSON.stringify(userData));
    // alert("Đăng ký thành công!");
    // navigation.goBack();

    try {
      const res = await axios.get(
        `http://192.168.201.188:3000/user/${email.trim()}`
      );
      if (res.data.email == email.trim()) {
        alert("Email đã được đăng ký!");
        return;
      } else {
        const res = await axios.post("http://192.168.201.188:3000/user/", {
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          password: password.trim(),
        });
        alert("Đăng ký thành công!");
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      style={{ flex: 1, paddingTop: 70 }}
    >
      <MainLogo title="Tạo tài khoản" />

      <MainInput placeholder="Full Name" value={name} onChangeText={setname} />
      <MainInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={setphone}
      />
      <MainInput
        placeholder="E-mail Adress"
        value={email}
        onChangeText={setemail}
      />
      <MainInput
        placeholder="Password"
        value={password}
        onChangeText={setpassword}
        password={true}
      />
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MainButton
          //backgroundColor={{ backgroundColor: "#3b5998" }}
          title="Sign Up"
          onPress={onSignUp}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

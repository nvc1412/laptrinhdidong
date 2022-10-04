import { Alert, StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
import MainLogo from "../components/MainLogo";
import MainInput from "../components/MainInput";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Signin({ navigation }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const goToHome = () => {
    if (email.trim() == "" || !email) {
      alert("Không được để trống email !");
    } else if (password.trim() == "" || !password) {
      alert("Không được để trống mật khẩu !");
    } else {
      login();
    }
  };
  // const login = async () => {
  //   let userData = await AsyncStorage.getItem("userData");
  //   if (userData) {
  //     userData = JSON.parse(userData);
  //     let arr = [...userData];
  //     arr = arr.filter(
  //       (value) =>
  //         value.email.toLocaleLowerCase() == email.toLocaleLowerCase() &&
  //         value.password == password
  //     );
  //     if (arr.length > 0) {
  //       let curUser = arr[0];
  //       AsyncStorage.setItem("curUser", JSON.stringify(curUser));
  //       Alert.alert("Đăng nhập thành công!");
  //       navigation.replace("Login");
  //     } else alert("Email hoặc mật khẩu không chính xác!");
  //   } else {
  //     alert("Email hoặc mật khẩu không chính xác!");
  //   }
  // };
  // // const checkLogin = async () => {
  // //   let userData = await AsyncStorage.getItem("curUser");
  // //   if (userData) navigation.replace("Sigin");
  // // };
  // // useEffect(() => {
  // //   checkLogin();
  // // }, []);

  function goForgotPassword() {
    navigation.navigate("ForgotPassword");
  }
  return (
    <View style={styles.main}>
      <MainLogo title="Sign in" />

      <MainInput
        placeholder="E-mail or Phone Number"
        value={email}
        onChangeText={setemail}
      />
      <MainInput
        placeholder="Password"
        value={password}
        onChangeText={setpassword}
      />

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MainButton title="Log In" onPress={goToHome} />

        <Text style={{ fontSize: 20, color: "grey", marginTop: 30 }}>OR</Text>

        <MainButton
          backgroundColor={{ backgroundColor: "#3b5998" }}
          title="Forgot Password"
          onPress={goForgotPassword}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f8f8ff",
  },
});

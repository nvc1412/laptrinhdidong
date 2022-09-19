import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
import MainLogo from "../components/MainLogo";
import MainInput from "../components/MainInput";

export default Signup = () => (
  <View style={{ marginTop: 70 }}>
    <MainLogo txt="Create new account" />

    <MainInput placeholder="Full Name" />
    <MainInput placeholder="Phone Number" />
    <MainInput placeholder="E-mail Adress" />
    <MainInput placeholder="Password" />

    <View
      style={{ width: "100%", alignItems: "center", justifyContent: "center" }}
    >
      <MainButton
        backgroundColor="#3b5998"
        borderColor="#3b5998"
        txtcolor="white"
        txt="Sign Up"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: 700,
    alignItems: "center",
    justifyContent: "center",
  },
});

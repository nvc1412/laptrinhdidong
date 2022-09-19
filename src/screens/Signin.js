import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
import MainLogo from "../components/MainLogo";

const Signin = () => (
  <View style={{ marginTop: 70 }}>
    <MainLogo txt="Sign in" />

    <MainInput placeholder="E-mail or Phone Number" />
    <MainInput placeholder="Password" />

    <View
      style={{ width: "100%", alignItems: "center", justifyContent: "center" }}
    >
      <MainButton
        backgroundColor="#3975e8"
        borderColor="#3975e8"
        txtcolor="white"
        txt="Log In"
      />

      <Text style={{ fontSize: 20, color: "grey", marginTop: 30 }}>OR</Text>

      <MainButton
        backgroundColor="#3b5998"
        borderColor="#3b5998"
        txtcolor="white"
        txt="Facebook Login"
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

export default Signin();

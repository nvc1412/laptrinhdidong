import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
import MainLogo from "../components/MainLogo";
import MainInput from "../components/MainInput";

export default Signup = () => (
  <View style={{ marginTop: 70 }}>
    <MainLogo title="Create new account" />

    <MainInput placeholder="Full Name" />
    <MainInput placeholder="Phone Number" />
    <MainInput placeholder="E-mail Adress" />
    <MainInput placeholder="Password" />

    <View
      style={{ width: "100%", alignItems: "center", justifyContent: "center" }}
    >
      <MainButton
        backgroundColor={{ backgroundColor: "#3b5998" }}
        title="Sign Up"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f8f8ff",
    alignItems: "center",
    justifyContent: "center",
  },
});

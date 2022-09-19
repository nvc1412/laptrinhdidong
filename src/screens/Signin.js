import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
import MainLogo from "../components/MainLogo";
import MainInput from "../components/MainInput";

export default function Signin({ navigation }) {
  function goForgotPassword() {
    navigation.navigate("ForgotPassword");
  }
  return (
    <View style={styles.main}>
      <MainLogo txt="Sign in" />

      <MainInput placeholder="E-mail or Phone Number" />
      <MainInput placeholder="Password" />

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
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
          txt="Forgot Password"
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

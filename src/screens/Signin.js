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
      <MainLogo title="Sign in" />

      <MainInput placeholder="E-mail or Phone Number" />
      <MainInput placeholder="Password" />

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MainButton title="Log In" />

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

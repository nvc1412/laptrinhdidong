import { StyleSheet, Text, View, Image } from "react-native";
import MainButton from "../components/MainButton";
import MainLogo from "../components/MainLogo";

export default function Login({ navigation }) {
  function goSignin() {
    navigation.navigate("Signin");
  }
  function goSignup() {
    navigation.navigate("Signup");
  }
  return (
    <View style={styles.main}>
      <Image source={require("../../assets/login.png")} />

      <MainLogo txt="Welcome to your" />

      <Text style={{ marginTop: 30, textAlign: "center" }}>
        Welcome to your app. Build your own social network in minutes.
      </Text>

      <MainButton
        backgroundColor="#3975e8"
        borderColor="#3975e8"
        txtcolor="red"
        txt="Log In"
        onPress={goSignin}
      />

      <MainButton
        backgroundColor="white"
        borderColor="#3975e8"
        txtcolor="#3975e8"
        txt="Sign Up"
        onPress={goSignup}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f8f8ff",
    alignItems: "center",
    justifyContent: "center",
  },
});

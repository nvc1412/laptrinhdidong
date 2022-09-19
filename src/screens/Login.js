import { StyleSheet, Text, View, Image } from "react-native";
import MainButton from "../components/MainButton";
import MainLogo from "../components/MainLogo";

export default Login = () => (
  <View style={styles.main}>
    <Image source={require("../../assets/login.png")} />

    <MainLogo txt="Welcome to your" />

    <Text style={{ marginTop: 30, textAlign: "center" }}>
      Welcome to your app. Build your own social network in minutes.
    </Text>

    <MainButton
      backgroundColor="#3975e8"
      borderColor="#3975e8"
      txtcolor="white"
      txt="Log In"
    />

    <MainButton
      backgroundColor="white"
      borderColor="#3975e8"
      txtcolor="#3975e8"
      txt="Sign Up"
    />
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

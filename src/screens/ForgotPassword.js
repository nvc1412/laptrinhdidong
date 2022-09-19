import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
import MainLogo from "../components/MainLogo";
import MainInput from "../components/MainInput";

export default function ForgotPassword() {
  return (
    <View style={styles.main}>
      <MainLogo txt="Forgot Password" />

      <MainInput placeholder="E-mail or Phone Number" />

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
          txt="Submit"
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

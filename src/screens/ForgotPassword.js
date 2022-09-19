import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
import MainLogo from "../components/MainLogo";
import MainInput from "../components/MainInput";

export default function ForgotPassword() {
  return (
    <View style={styles.main}>
      <MainLogo title="Forgot Password" />

      <MainInput placeholder="E-mail or Phone Number" />

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MainButton title="Submit" />
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

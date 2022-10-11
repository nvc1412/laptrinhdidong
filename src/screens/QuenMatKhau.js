import { ImageBackground, StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
import MainLogo from "../components/MainLogo";
import MainInput from "../components/MainInput";

export default function QuenMatKhau() {
  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      style={styles.main}
    >
      <MainLogo title="Lấy lại mật khẩu" />

      <MainInput placeholder="E-mail" />

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MainButton title="Gửi" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 30,
  },
});

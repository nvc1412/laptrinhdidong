import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Profile() {
  const navigation = useNavigation();

  // const url = "http://192.168.0.103:3300";
  const url = "http://app-mobile-store.herokuapp.com";

  const [userid, setuserid] = useState("");
  const [username, setusername] = useState("");
  const [useremail, setuseremail] = useState("");
  const [doiemail, setdoiemail] = useState("");
  const [userphone, setuserphone] = useState("");
  const [userdate, setuserdate] = useState("");
  const [useraddress, setuseraddress] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("iduser").then((res) => {
      setuserid(res);
    });
    AsyncStorage.getItem("nameuser").then((res) => {
      setusername(res);
    });
    AsyncStorage.getItem("emailuser").then((res) => {
      setuseremail(res);
      setdoiemail(res);
    });
    AsyncStorage.getItem("phoneuser").then((res) => {
      setuserphone(res);
    });
    AsyncStorage.getItem("dateuser").then((res) => {
      setuserdate(res);
    });
    AsyncStorage.getItem("addressuser").then((res) => {
      setuseraddress(res);
    });
  }, []);

  const DangXuat = () => {
    AsyncStorage.clear();
    navigation.replace("Đăng Nhập");
  };

  const SuaTK = async () => {
    try {
      const res = await axios.get(`${url}/users/email/${useremail.trim()}`);

      if (useremail.trim() != doiemail.trim() && res.data != "") {
        alert("Email đã được đăng ký!");
        setuseremail(doiemail.trim());
        return;
      } else {
        const res = await axios.put(`${url}/users/${userid}`, {
          name: username.trim(),
          email: useremail.trim(),
          phone: userphone.trim(),
          date: userdate.trim(),
          address: useraddress.trim(),
        });
        alert("Cập nhật thành công!");
        AsyncStorage.setItem("nameuser", username.trim());
        AsyncStorage.setItem("emailuser", useremail.trim());
        AsyncStorage.setItem("phoneuser", userphone.trim());
        AsyncStorage.setItem("dateuser", userdate.trim());
        AsyncStorage.setItem("addressuser", useraddress.trim());
        //navigation.navigate("Profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.profile_show}>
        <View style={styles.profile_show_image}>
          <Image
            style={styles.img}
            source={require("../../assets/iconprofile.png")}
          />
        </View>
        <Text style={styles.text_name}>{username}</Text>
        <Text style={styles.text_info}>Điền thông tin để chỉnh sửa</Text>
      </View>
      <View style={styles.profile_edit}>
        <View style={styles.profile_edit_input}>
          <Image source={require("../../assets/iconuser.png")} />
          <TextInput
            value={username}
            style={styles.profile_edit_textinput}
            onChangeText={setusername}
          />
        </View>
        <View style={styles.profile_edit_input}>
          <Image source={require("../../assets/iconemail.png")} />
          <TextInput
            value={useremail}
            onChangeText={setuseremail}
            style={styles.profile_edit_textinput}
          />
        </View>
        <View style={styles.profile_edit_input}>
          <Image source={require("../../assets/iconphone.png")} />
          <TextInput
            value={userphone}
            onChangeText={setuserphone}
            style={styles.profile_edit_textinput}
          />
        </View>
        <View style={styles.profile_edit_input}>
          <Image source={require("../../assets/icondate.png")} />
          <TextInput
            value={userdate}
            onChangeText={setuserdate}
            style={styles.profile_edit_textinput}
          />
        </View>
        <View style={styles.profile_edit_input}>
          <Image source={require("../../assets/iconaddress.png")} />
          <TextInput
            value={useraddress}
            onChangeText={setuseraddress}
            style={styles.profile_edit_textinput}
          />
        </View>
        <TouchableOpacity style={styles.btnLogout} onPress={DangXuat}>
          <Image source={require("../../assets/icondangxuat.png")} />
          <Text style={styles.textLogout}>Đăng Xuất</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btnSua} onPress={SuaTK}>
        <Image
          style={styles.imgSua}
          source={require("../../assets/iconluu.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
  },
  profile_show: {
    flex: 2,
    backgroundColor: "#0c1b32",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },
  profile_show_image: {
    backgroundColor: "#fff",
    borderRadius: 100,
    elevation: 20,
    shadowOpacity: 6,
    shadowColor: "green",
  },
  img: {
    width: 130,
    height: 130,
    borderRadius: 100,
  },
  text_name: {
    color: "white",
    fontSize: 25,
    fontWeight: "500",
    marginTop: 10,
  },
  text_info: { color: "gray", fontStyle: "italic" },

  profile_edit: { flex: 3, paddingHorizontal: 15 },
  profile_edit_input: {
    flexDirection: "row",
    flex: 1,
    borderBottomWidth: 1,
    alignItems: "center",
  },
  profile_edit_textinput: {
    marginLeft: 20,
    fontSize: 18,
    paddingVertical: 8,
    width: "100%",
  },
  btnLogout: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  textLogout: {
    color: "#fac745",
    fontSize: 20,
    marginLeft: 20,
  },
  btnSua: {
    position: "absolute",
    width: 40,
    height: 40,
    top: 60,
    right: 30,
  },
  imgSua: { width: "100%", height: "100%" },
});

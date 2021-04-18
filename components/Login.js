import React, { UseState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import firebase from "@react-native-firebase/app";
import "@react-native-firebase/auth";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <Image
          style={styles.mainImage}
          source={require("../assets/mainImg.jpg")}
        />
        <Text
          style={{
            color: "#C5C4C4",
            fontSize: 30,
            marginTop: 10,
            fontWeight: "700",
          }}
        >
          Cake app
        </Text>
        <Text
          style={{
            color: "#C7C7C7",
            fontSize: 15,
            textAlign: "center",
            marginTop: 10,
            fontWeight: "400",
          }}
        >
          Please log in to your account to continue work in app
        </Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          //   onChangeText={onChangeNumber}
          //   value={number}
          placeholder="cakeuser@gmail.com"
          keyboardType="default"
          textAlign="center"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          //   onChangeText={onChangeNumber}
          //   value={number}
          secureTextEntry={true}
          placeholder="your password"
          keyboardType="numeric"
          dataDetectorTypes="phoneNumber"
          textAlign="center"
        />
        <TouchableOpacity
          style={{ alignItems: "stretch" }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={{ color: "#C5C4C4", fontSize: 13, marginTop: 20 }}>
            Create account,<Text> </Text>
            <Text
              style={{
                color: "#C5C4C4",
                fontSize: 16,
                textDecorationLine: "underline",
              }}
            >
              Sign up
            </Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate("MainMenu")}
        >
          <View style={styles.logbtn}>
            <Text
              style={{
                color: "#fff",
                fontSize: 17,
                fontWeight: "700",
                padding: 17,
              }}
            >
              Log in
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainView: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "80%",
  },
  mainImage: {
    height: 95,
    width: 95,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#000",
    marginTop: 0,
  },
  input: {
    borderRadius: 15,
    borderWidth: 1,
    height: 50,
    width: 310,
    fontSize: 16,
  },
  label: {
    color: "#C5C4C4",
    fontSize: 14,
    textAlign: "center",
    marginTop: 25,
    marginBottom: 9,
    fontWeight: "700",
  },
  logbtn: {
    backgroundColor: "#000",
    width: 310,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;

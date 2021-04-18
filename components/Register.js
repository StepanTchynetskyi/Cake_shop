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
const Register = ({ navigation }) => {
  const [fullName, setFullName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View
          style={{
            width: "100%",
            textAlign: "left",
          }}
        >
          <Text style={styles.label}>Full Name</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(userFullName) => setFullName(userFullName)}
          //   value={number}
          placeholder="John Brown"
          keyboardType="default"
          textAlign="center"
        />
        <View
          style={{
            width: "100%",
            textAlign: "left",
          }}
        >
          <Text style={styles.label}>Phone number</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(userPhone) => setPhone(userPhone)}
          //   value={number}
          placeholder="+38( ___)___-__-__ "
          keyboardType="numeric"
          textAlign="center"
        />
        <View
          style={{
            width: "100%",
            textAlign: "left",
          }}
        >
          <Text style={styles.label}>E-mail</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(userEmail) => setEmail(userEmail)}
          //   value={number}
          placeholder="cakeuser@gmail.com"
          keyboardType="default"
          textAlign="center"
        />
        <View
          style={{
            width: "100%",
            textAlign: "left",
          }}
        >
          <Text style={styles.label}>Password</Text>
        </View>
        <TextInput
          style={styles.input}
          //   onChangeText={onChangeNumber}
          //   value={number}
          secureTextEntry={true}
          placeholder="Enter your password"
          keyboardType="default"
          textAlign="center"
        />
        <Text style={{ color: "#C5C4C4", fontSize: 13, marginTop: 5 }}>
          Your password must be 8-16 characters and contain at least one number
          dagit
        </Text>
        <View
          style={{
            width: "100%",
            textAlign: "left",
          }}
        >
          <Text style={styles.label}>Confirm Password</Text>
        </View>
        <TextInput
          style={styles.inputLast}
          //   onChangeText={onChangeNumber}
          //   value={number}
          secureTextEntry={true}
          placeholder="Enter your password again"
          keyboardType="default"
          textAlign="center"
        />
        <TouchableOpacity
          style={{ marginTop: 40, bottom: 0 }}
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
              Sign up
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
  },
  mainView: {
    alignItems: "center",
    height: "100%",
    width: "80%",
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
    marginTop: 10,
    marginBottom: 9,
    fontWeight: "700",
    textAlign: "left",
  },
  logbtn: {
    backgroundColor: "#000",
    width: 310,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  inputLast: {
    borderRadius: 15,
    borderWidth: 1,
    height: 50,
    width: 310,
    fontSize: 16,
  },
});

export default Register;

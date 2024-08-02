import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MainButton from "../components/MainButton";
import {hp,wp } from "../helpers/common"

export default function LogIn() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#0A578B4D", "#369A4630", "#FFFFFF40"]}
        style={styles.semi1}
      />

      <Text style={styles.heading}>Welcome Back!</Text>

      <View style={styles.form}>
        <Text style={styles.subheading}>
          Please enter your specific login credentials
        </Text>
        <TextInput style={styles.input} placeholder="Enter email" />

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Enter password"
            maxLength={12}
            style={styles.inp}
            value={password}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setPassword}
            secureTextEntry={showPassword}
          />
          <MaterialCommunityIcons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="#aaa"
            style={styles.icon}
            onPress={toggleShowPassword}
          />
        </View>

        <Pressable onPress={() => navigation.navigate("ContactAdmin")}>
          <Text style={styles.forgot}>Forgot password</Text>
        </Pressable>
        <MainButton onPress={() => navigation.navigate("PasswordScreen")}>
          Continue
        </MainButton>
        <Text style={{ paddingVertical: 32, color: "#828BA3" }}>
          This site is protected by the{" "}
          <Text style={{ color: "#323745" }}>Privacy Policy.</Text>
        </Text>
      </View>
      <LinearGradient
        colors={["#00558C4F", "#319B413B"]}
        style={styles.semi2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    flex: 1,
    justifyContent: "center",
  
  },
  heading: {
   
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 32,
    lineHeight: 44,
    letterSpacing: -0.002,
    color: "#161C2D",
  },
  form: {
    paddingVertical: 32,
  },
  subheading: {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 24,
    color: "#161C2D",
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C7C8D9",
    width: "100%",
    padding: 17.5,
    marginTop: 20,
  },
  inp: {
    width: "90%",
  },
  forgot: {
    paddingTop: 12,
    textAlign: "right",
    color: "#0A578B",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C7C8D9",
    width: "100%",
    padding: 14,
    marginTop: 20,
  },
  semi1: {
    overflow: "hidden",
    position: "absolute",
    left  : wp(-20),
    bottom   : hp(30),
    width: wp(40),
    height: hp(20),
    borderTopRightRadius: 150,
    borderBottomRightRadius: 150,
  },
  semi2: {
    overflow: "hidden",
    position: "absolute",
    right: wp(-20),
    top: hp(65),
    width: wp(55),
    height: hp(30),
    borderTopLeftRadius: 170,
    borderBottomLeftRadius: 170,
  },
});

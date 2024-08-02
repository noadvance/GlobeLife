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
import AntDesign from '@expo/vector-icons/AntDesign';
import {hp,wp } from "../helpers/common";

export default function PasswordScreen() {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const toggleShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#0A578B4D", "#369A4630", "#FFFFFF40"]}
        style={styles.semi1}
      />
      <LinearGradient
        colors={["#00558C4F", "#319B413B"]}
        style={styles.semi2}
      />

      <View style={styles.checkMarkContainer}>
      <AntDesign name="checkcircle" size={40} color="#319B42" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Account successfully created</Text>
        <Text style={styles.subheading}>
          Please verify your identity and fill out your work profile before
          starting.{"\n"}Thanks!
        </Text>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="New password"
          secureTextEntry={showNewPassword}
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <MaterialCommunityIcons
          name={showNewPassword ? "eye-off" : "eye"}
          size={24}
          color="#aaa"
          style={styles.icon}
          onPress={toggleShowNewPassword}
        />
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm new password"
          secureTextEntry={showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <MaterialCommunityIcons
          name={showConfirmPassword ? "eye-off" : "eye"}
          size={24}
          color="#aaa"
          style={styles.icon}
          onPress={toggleShowConfirmPassword}
        />
      </View>

      <LinearGradient
        colors={["#00558C", "#319B41"]}
        start={[0, 0]}
        end={[1, 0]}
        style={styles.gradientButton}
      >
        <Pressable
          style={styles.beginButton}
          onPress={() => navigation.navigate("LogIn")}
        >
          <Text style={styles.beginButtonText}>Begin</Text>
        </Pressable>
      </LinearGradient>
      <Text style={styles.footerText}>
        This site is protected by the{" "}
        <Text style={styles.privacyPolicy}>Privacy Policy.</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 32,
    position: "relative",
  },
  checkMarkContainer: {
    position: "absolute",
    top: 120,
    left: "18%",
    transform: [{ translateX: -25 }],
    zIndex: 2,
  },
  
  textContainer: {
    width: "100%",
    alignItems: "center",
    zIndex: 2,
  },
  heading: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 27,
    lineHeight: 44,
    letterSpacing: -0.002,
   
  },
  subheading: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
    lineHeight: 28,
    color: "#131418",
    paddingVertical: 16,
  },
  input: {
    width: "90%",
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
    zIndex: 2,
  },
  gradientButton: {
    width: "100%",
    borderRadius: 14,
    marginTop: 20,
    zIndex: 2,
  },
  beginButton: {
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },
  beginButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  footerText: {
    fontFamily: "Inter_400Regular",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 24,
    color: "#828BA3",
    marginTop: 30,
    zIndex: 2,
  },
  privacyPolicy: {
    color: "#323745",
  },
  semi1: {
    overflow: "hidden",
    position: "absolute",
    left  : wp(-20),
    bottom   : hp(39),
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
  icon: {
    marginLeft: 10,
    zIndex: 3,
  },
});

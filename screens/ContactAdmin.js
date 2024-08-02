import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainButton from "../components/MainButton";
import { LinearGradient } from "expo-linear-gradient";
import {hp,wp } from "../helpers/common"

;
export default function ContactAdmin({ navigation }) {
  return (
    
    <View style={styles.container}>
      <LinearGradient
        colors={["#0A578B4D", "#369A4630", "#FFFFFF40"]}
        style={styles.semi1}
      />
      <View style={styles.container1}>
        <Text style={styles.heading}>Please contact your Admin</Text>
        <Text style={styles.subheading}>
          You need your specific login credentials {"\n"}to login.
        </Text>
        <MainButton onPress={() => navigation.navigate("LogIn")}>
          Return to Login
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: "10%",
  },
  container1: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: "center",
  },
  heading: {
    paddingVertical: 16,
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 36,
    lineHeight: 56,
    letterSpacing: -0.004,
    color: "#131418",
  },
  subheading: {
    fontFamily: "Inter",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 28,
    color: "#131418",
  },
  semi1: {
    overflow: "hidden",
    position: "absolute",
    left  : wp(-20),
    bottom   : hp(28),
    width: wp(40),
    height: hp(20),
    borderTopRightRadius: 150,
    borderBottomRightRadius: 150,
  },
  semi2: {
    overflow: "hidden",
    position: "absolute",
    right: wp(-20),
    top: hp(70),
    width: wp(55),
    height: hp(30),
    borderTopLeftRadius: 170,
    borderBottomLeftRadius: 170,
  },
});

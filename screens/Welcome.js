import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  Pressable,
  TouchableOpacityComponent,
} from "react-native";
import { useState, useEffect, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { wp, hp } from "../helpers/common";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.welcome}>
      <View style={styles.welcome} >
        <View style={styles.box}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <Pressable onPress={() => navigation.navigate("LogIn")}>
            <Text style={styles.text}>Globe Life</Text>
          </Pressable>
        </View>
        <LinearGradient
          colors={["#0A578B4D", "#369A4630", "#FFFFFF40"]}
          style={styles.semi1}
        />
        <LinearGradient
          colors={["#00558C4F", "#319B413B"]}
          style={styles.semi2}
        />
        <LinearGradient
          colors={["#00558C4F", "#319B413B"]}
          style={styles.semi3}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
  },

  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom    : wp(25)
   
  },
  text: {
    color: "#005582",
    fontSize: 65,
    fontFamily: "Inter",
    fontWeight: "800",
    textAlign: "center",
    paddingHorizontal: 90,
  },

  logo: {
    width: wp(22),
    height: hp(10),
  },
  semi1: {
    overflow: "hidden",
    position: "absolute",
    top: wp(160),
    alignSelf: "center",
    width: wp(90),
    height: hp(30),
    borderTopRightRadius: 190,
    borderTopLeftRadius: 190,
  },
  semi2: {
    overflow: "hidden",
    position: "absolute",
    alignSelf: "center",
    top: wp(150),
    width: wp(105),
    height: hp(30),
    borderTopLeftRadius: 190,
    borderTopRightRadius: 190,
  },
  semi3: {
    overflow: "hidden",
    position: "absolute",
    alignSelf: "center",
    top: wp(140),
    width: wp(125),
    height: hp(50),
    borderTopLeftRadius: 230,
    borderTopRightRadius: 230,
  },
});

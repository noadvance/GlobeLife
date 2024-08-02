import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

export default function MainButton({ children, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#369A46",
    paddingVertical: 16,
    marginTop: 20,
    borderRadius: 14,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
  },
});

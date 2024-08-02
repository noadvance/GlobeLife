import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import ContactAdmin from "./screens/ContactAdmin";
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
} from "react-native";
import Welcome from "./screens/Welcome";
import LogIn from "./screens/LogIn";
import PasswordScreen from "./screens/PasswordScreen";
import { useState, useEffect } from "react";

const Stack = createStackNavigator();

export default function App() {
  const [isNavigationIsReady, setNavigationIsReady] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (isNavigationIsReady) {
      setTimeout(() => {
        setShowSplash(false);
      }, 3000);
    }
  }, []);

  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PasswordScreen"
          component={PasswordScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContactAdmin"
          component={ContactAdmin}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

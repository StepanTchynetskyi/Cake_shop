import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Providers from "./navigation";
import firebase from "@react-native-firebase/app";
import "@react-native-firebase/auth";
export default function App() {
  return <Providers />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

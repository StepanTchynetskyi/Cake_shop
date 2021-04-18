import React from "react";
import { AuthProvider } from "./AuthProvider";
import Routes from "./Routes";
import firebase from "@react-native-firebase/app";
import "@react-native-firebase/auth";
const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Providers;

import "react-native-gesture-handler";
import React, { useContext, useState, useEffect } from "react";
import firebase from "@react-native-firebase/app";
import "@react-native-firebase/auth";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/Login";

import Register from "../components/Register";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true"); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  }, []);

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch === true) {
    return (
      <View>
        <Text>agajg</Text>
      </View>
    );
  } else {
    routeName = "Login";
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerTintColor: "#BDBDBD" }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerTintColor: "#BDBDBD" }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

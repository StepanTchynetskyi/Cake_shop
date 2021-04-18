import "react-native-gesture-handler";
import React from "react";
import firebase from "@react-native-firebase/app";
import "@react-native-firebase/auth";
import { createStackNavigator } from "@react-navigation/stack";
import MainMenu from "../components/MainMenu";
import ChooseOne from "../components/ChooseOne";
import ResultPage from "../components/ResultPage";
import CompleteOrder from "../components/CompleteOrder";
import Order from "../components/Order";

const Stack = createStackNavigator();
const AppStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainMenu"
        component={MainMenu}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CupCake"
        component={ChooseOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResultPage"
        component={ResultPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CompleteOrder"
        component={CompleteOrder}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default AppStack;

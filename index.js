import { registerRootComponent } from "expo";
import firebase from "@react-native-firebase/app";
import "@react-native-firebase/auth";
import App from "./App";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

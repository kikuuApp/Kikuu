import React from "react";
import { AppRegistry, AsyncStorage } from "react-native";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./com/kikuu/main/stores";
import { PersistGate } from "redux-persist/integration/react";
import { ActivityIndicator } from "react-native";
import LoginScreen from './com/kikuu/main/app/kikuu_login/LoginScreen';
/**
 * Init is the entry point for the entire app
 * It wraps Provider{store},PersistGate {persistor=persistor} and optional
 * Loading Activityindicator
 */
const Init = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator color="blue" size="large"/>} persistor={persistor} >
        <LoginScreen />
      </PersistGate>
    </Provider>
  );
};

//call application
AppRegistry.registerComponent("Kikuu", () => Init);

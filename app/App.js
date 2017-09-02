

/* @flow */

import React from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import Drawer from "./Drawer";
import Main from "./components/main/";
import Money from "./components/money/";
import Money1 from "./components/money/money1";

const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer },
        Main: { screen: Main },
        Money: { screen: Money },
        Money1: { screen: Money1 },
    },
    {
        initialRouteName: "Drawer",
        headerMode: "none",
    }
);

export default () =>
    <Root>
        <AppNavigator />
    </Root>;

/* @flow */

import React from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "./components/home/";
import SideBar from "./components/sidebar";
import Main from "./components/main/";
import Money from "./components/money/";
import Money1 from "./components/money/money1";

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    Main: { screen: Main },
    Money: { screen: Money },
    Money1: { screen: Money1 },
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default Drawer;

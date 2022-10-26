import React from "react";
import { createMaterialBottomTabNavigator  } from "@react-navigation/material-bottom-tabs";

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "../components/Controllers/CustomTabBar";

import Home from '../NavTabs/screens/Home/';

import Appointments from '../NavTabs/screens/Appointments';

import Profile from '../NavTabs/screens/Profile';
import AccountForm from "../../screens/AccountForm";


import Welcome from "../../screens/Welcome";
import Search from "../NavTabs/screens/Search"

import Casa from "../NavTabs/screens/Home";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default () => (
    <Tab.Navigator>
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Casa" component={Casa} />

    </Tab.Navigator>
)
import React from "react";
import { createMaterialBottomTabNavigator  } from "@react-navigation/material-bottom-tabs";

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "../components/Controllers/CustomTabBar";

import Home from '../NavTabs/screens/Home/';
import Favorites from '../NavTabs/screens/Favorites'
import Appointments from '../NavTabs/screens/Appointments';

import Profile from '../NavTabs/screens/Profile';
import AccountForm from "../../screens/AccountForm";


import Welcome from "../../screens/Welcome";
import Search from "../NavTabs/screens/Search"

import Casa from "../NavTabs/screens/Home";

const TabMat = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default () => (
  <Tab.Navigator tabBar={props=><CustomTabBar {...props}/>}>
    <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Appointments" component={Appointments} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
)
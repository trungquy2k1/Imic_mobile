import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import Screen
import { Home } from "../Screen/Home";
import About from "../Screen/About";
import LoginScreen from "../Screen/Login";
import AppProvider from "../Screen/AppContext";
import { MainStackParamList } from "../types/navigation";
import Category from "../Screen/Category";
import TabBottom from "./TabBottom";
import Drawer from "./Drawer";
const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
            {/* <Stack.Screen name="TabBottom" component={TabBottom} /> */}
            {/* <Stack.Screen name="Drawer" component={Drawer}/> */}
            <Stack.Screen name="Home" component={Drawer} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Category" component={Category}/>
        </Stack.Navigator>
    );
};
export default MainStack;
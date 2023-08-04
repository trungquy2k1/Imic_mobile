import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./MainStack";
import AppProvider from "../Screen/AppContext";

const Index = () =>{
    return(
        <AppProvider>
            <NavigationContainer>
                <MainStack />
            </NavigationContainer>
        </AppProvider>
    );
};
export default Index;
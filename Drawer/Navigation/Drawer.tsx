import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Home } from "../Screen/Home";
import About from "../Screen/About";
import { HomeTabParamList } from "../types/navigation";

const Drawer = () => {
    const Drawer = createDrawerNavigator<HomeTabParamList>();
    return (
      <Drawer.Navigator>
        {/* Drawer Screens here */}
        <Drawer.Screen name="HomeSCR" component={Home} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    );
  };
  
  export default Drawer;
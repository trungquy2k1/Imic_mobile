import React from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import {Home} from '../Screen/Home';
import About from '../Screen/About';

const TabBottom = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {height: 60}
      }}>
      <Tab.Screen name="HomeSCR" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="home" color={color} size={36} />
          ),
          tabBarLabelStyle: {fontSize: 16}
        }} />
      <Tab.Screen name="About" component={About} options={{
          tabBarLabel: 'About',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="feed" color={color} size={36}  />
          ),
          tabBarLabelStyle: {fontSize: 16}
        }} />
    </Tab.Navigator>
  );
};
export default TabBottom;

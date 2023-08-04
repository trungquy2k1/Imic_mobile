import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import CategoryScreen from './Category';
import LoginScreen from './login';
import {Home} from './Home';
import About from './About';
import {AppProvider} from './AppContext';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const StackScreen = () => {
  
  const tabScreenOptions = {
    tabBarStyle: {
      backgroundColor: '#f2f2f2',
    },
    tabBarLabelStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    // Các thuộc tính khác...
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#000"
      inactiveColor="red"
      barStyle={{paddingBottom: 8, backgroundColor: 'lightblue', }}  
    >
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        }}

        
      />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};
export function Index() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen name="Home" component={StackScreen} />
          <Stack.Screen name="Category" component={CategoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

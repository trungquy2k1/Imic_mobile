import {
    BottomTabScreenProps,
    createBottomTabNavigator,
  } from '@react-navigation/bottom-tabs';
  import {
    CompositeScreenProps,
    NavigationContainer,
  } from '@react-navigation/native';
  import type {NativeStackScreenProps} from '@react-navigation/native-stack';
  import {StackScreenProps, createStackNavigator} from '@react-navigation/stack';
  import * as React from 'react';
  import {Button, StyleSheet, Text, View} from 'react-native';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  
  type RootStackParamList = {
    MainTab: undefined;
    Home: undefined;
    Profile: {userId: string};
    Feed: {sort: 'latest' | 'top'} | undefined;
  };
  
  export type RootStackScreenProps<T extends keyof RootStackParamList> =
    StackScreenProps<RootStackParamList, T>;
  
  export type HomeTabParamList = {
    Home: undefined;
    Feed: undefined;
    Setting: undefined;
  };
  
  export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
    CompositeScreenProps<
      BottomTabScreenProps<HomeTabParamList, T>,
      RootStackScreenProps<keyof RootStackParamList>
    >;
  
  declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }
  
  const RootStack = createStackNavigator<RootStackParamList>();
  
  type HomeScreenProps = HomeTabScreenProps<'Home'>;
  function HomeScreen({navigation, route}: HomeScreenProps) {
    route;
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Profile', {userId: '1234'})}
        />
      </View>
    );
  }
  
  type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
  function ProfileScreen({route, navigation}: ProfileScreenProps) {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('Profile', {userId: '1234'})}
        />
        <Text>Profile with userId: {route.params.userId}</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go to Feed" onPress={() => navigation.navigate('Feed')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }
  
  const FeedScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Feed Screen</Text>
      </View>
    );
  };
  
  const SettingScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Setting Screen</Text>
      </View>
    );
  };
  
  function App() {
    return (
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="MainTab">
          <RootStack.Screen
            options={{
              headerShown: false,
            }}
            name="MainTab"
            component={MainTab}
          />
          <RootStack.Screen name="Profile" component={ProfileScreen} />
          <RootStack.Screen name="Feed" component={FeedScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
  
  const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  });
  
  export default App;
  
  const Tab = createBottomTabNavigator<HomeTabParamList>();
  const HomeTabIcon = (props: {
    focused: boolean;
    color: string;
    size: number;
  }) => <MaterialIcons size={props.size} name="home" color={props.color} />;
  const FeedTabIcon = () => (
    <MaterialIcons size={32} name="dashboard" color={'green'} />
  );
  const SettingTabIcon = () => (
    <AntDesign size={32} name="setting" color={'red'} />
  );
  const MainTab = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: HomeTabIcon,
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: FeedTabIcon,
          }}
          name="Feed"
          component={FeedScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: SettingTabIcon,
          }}
          name="Setting"
          component={SettingScreen}
        />
      </Tab.Navigator>
    );
  };
  
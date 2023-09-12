import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from './TabBar';
import {Screens} from './Screens';
import HomeScreen from '../screens/Main/HomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const MainTab = () => {
    return (
      <Tab.Navigator
        screenOptions={{header: () => null, unmountOnBlur: true}}
        tabBar={props => <TabBar {...props} />}>
        <Tab.Screen name={Screens.Login} options={{}} component={HomeScreen} />
      </Tab.Navigator>
    );
  };

  const MainStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Screens.Home} component={LoginScreen} />
        <Stack.Screen name="MainTab" component={MainTab} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default Navigation;

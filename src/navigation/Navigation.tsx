import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabBar} from './BottomTabBar';
import {Screens} from './Screens';
import HomeScreen from '../screens/Main/HomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import {navigationRef} from './rootNavigation';
import FavoritesScreen from '../screens/Main/FavoritesScreen';
import ProductListScreen from '../screens/Main/ProductListScreen';
import ProductDetailScreen from '../screens/Main/ProductDetailScreen';
import BasketScreen from '../screens/Main/BasketScreen';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const MainTab = () => {
    return (
      <Tab.Navigator
        screenOptions={{header: () => null, unmountOnBlur: true}}
        tabBar={props => <BottomTabBar {...props} />}>
        <Tab.Screen name={'Ana Ekran'} options={{tabBarIcon:"home"}} component={HomeScreen} />
        <Tab.Screen name={'Favoriler'} options={{tabBarIcon:"heart"}} component={FavoritesScreen} />
        <Tab.Screen name={'Ürünler'} options={{tabBarIcon:"th-list"}} component={ProductListScreen} />
        <Tab.Screen name={'Sepetim'} options={{tabBarIcon:"shopping-cart"}} component={BasketScreen} />






      </Tab.Navigator>
    );
  };

  const MainStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Screens.Login} component={LoginScreen} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Tab.Screen name={Screens.ProductDetail} options={{}} component={ProductDetailScreen} />

      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack />
    </NavigationContainer>
  );
};

export default Navigation;

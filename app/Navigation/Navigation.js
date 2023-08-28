// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BluetoothPage from '../screens/BluetoothPage';
import HomePage from '../screens/HomePage';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Blutooth" component={BluetoothPage} />
      </Stack.Navigator>
  );
};

export default Navigation;

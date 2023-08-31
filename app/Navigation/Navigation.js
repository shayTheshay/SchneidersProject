// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BluetoothPage from '../screens/BluetoothPage';
import HomePage from '../screens/HomePage';
import { TextBase } from 'react-native';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={
        {
          headerStyle :{
            backgroundColor:'#90d6e0'
          },
          headerTitle:'Shon',
        }
      }
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Blutooth" component={BluetoothPage} />
      </Stack.Navigator>
  );
};

export default Navigation;

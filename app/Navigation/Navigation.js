// Navigation.js
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Header, createStackNavigator } from '@react-navigation/stack';
import BluetoothPage from '../screens/BluetoothPage';
import HomePage from '../screens/HomePage';
import routes from './Routing'


function handleMenuPress(){

}

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
          headerTitle: Stack.name,
          headerLeft:() =>(
          <View style={styles.container}>
              <TouchableOpacity onPress={handleMenuPress}>
                <Image
                  source={require('../assets/menu.png')}
                    style={{ width: 30, height: 30 }}
                  />
              </TouchableOpacity>
          </View>
          
          ),
          
        }
      }
      >

        <Stack.Screen 
        name="Home" 
        component={HomePage} 
        
        />


        <Stack.Screen 
        name="Blutooth" 
        component={BluetoothPage} 
        
        
        />
      
      
      </Stack.Navigator>
  );
};



const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignSelf:'center',
    alignContent:'center',
    padding: 15,
  }
});



export default Navigation;

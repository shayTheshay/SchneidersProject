// Navigation.js
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { Header, createStackNavigator } from '@react-navigation/stack';
import BluetoothPage from '../screens/BluetoothPage';
import HomePage from '../screens/HomePage';
import Menucomponent from '../components/MenuComponent'
import { SafeAreaView } from 'react-native';


const CustomHeaderTitle=({children})=>{

  return(
    <View style={styles.container}>
      <Text>{children}</Text>
    </View>

  );


};



const Stack = createStackNavigator();

const Navigation = () => {
  return (
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={
        {
          headerShown: true,
          headerStyle :{
            backgroundColor:'#90d6e0',
            height: 55,

            
          },
          headerTitle: CustomHeaderTitle,
          headerLeft:() =>(
          <SafeAreaView style={styles.container}>
            <Menucomponent/>
          </SafeAreaView>
          
          ),
          headerTitleStyle:{
            paddingBottom:1,
            alignContent:'center',
            alignItems:'center',
            alignSelf:'center',
            flex:1,
          }
          
          
        }
      }
      >

        <Stack.Screen 
        name="Home" 
        component={HomePage} 
        headerTitle="HOmi"

        />


        <Stack.Screen 
        name="Blutooth" 
        component={BluetoothPage} 
        headerTitle="BLE"
        
        />
      
      
      </Stack.Navigator>
  );
};



const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignSelf:'center',
    alignContent:'center',
    paddingBottom: 50,
    paddingLeft: 15,
    flex:1,
  },

  text:{
    
    flex:1,
  }
});



export default Navigation;

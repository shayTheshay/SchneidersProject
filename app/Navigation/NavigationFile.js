// Navigation.js
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { Header, createStackNavigator } from '@react-navigation/stack';
import Menucomponent from '../components/MenuComponent'
import { SafeAreaView } from 'react-native';
import HomePage from '../screens/HomePage';
import Bluetooth from '../screens/BluetoothPage';

const CustomHeaderTitle=({children})=>{

  return(
    <View style={styles.text}>
      <Text>{children}</Text>
    </View>

  );


};


const Stack = createStackNavigator();

const Navigation = (props) => {
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
        headerTitleAlign:'center',

      }
    }
    >
      <Stack.Screen 
        name="Home" 
        component={HomePage} 
        options={{headerTitle : 'HomeScreen'}}

        />


        <Stack.Screen 
        name="Bluetooth" 
        component={Bluetooth} 
        options={{headerTitle : 'BluetoothScreen'}}

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
    flexDirection:'column',
  },

  text:{
    flex:1,
  }
});



export default Navigation;

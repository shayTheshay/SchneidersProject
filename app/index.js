import React from 'react'
import { View, Text, StyleSheet} from 'react-native';
import { useRouter, Stack } from 'expo-router';
import BasePage from './screens/BasePage'
import HomePage from './screens/HomePage'; 
import BluetoothPage from './screens/BluetoothPage';
import Navigation from './Navigation/Navigation';
import NavBar from './components/NavBar';




export default App =() => {
    return(
        // <BluetoothPage>
        // {/* TODO: Replace here with navigation */}
        // </BluetoothPage>
        <HomePage></HomePage>
    )
};

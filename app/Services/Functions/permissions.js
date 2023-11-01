import {React, useEffect, useState} from "react";
import {PermissionsAndroid } from "react-native";


export const bluetoothPermssionScan = async () => {
    let hasPermission = false;
    try {
        console.log("I am inside the try");
        hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN);
  
        if(!hasPermission) {
            console.log("I am inside the if");
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN);
            console.log("I am inside the if");
            hasPermission = granted === PermissionsAndroid.RESULTS.GRANTED; 
        }
        console.log("I am outside the if");
    } catch (err) {
        console.log("I am inside the catch");
        console.error(err);
    }
    return hasPermission;
}


export const bluetoothPermssionConnect = async () => {
    let hasPermission = false;
    try {
      hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT);
  
      if(!hasPermission) {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT);
        hasPermission = granted === PermissionsAndroid.RESULTS.GRANTED; 
      }

    } catch (err) {
      console.error(err);
    }
  
    return hasPermission;
}



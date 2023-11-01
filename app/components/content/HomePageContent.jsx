import { View, Image, Text, StyleSheet, Platform, Button, PermissionsAndroid } from "react-native";
import BluetoothSymbol from "../BluetoothComponent";
import {React, useEffect, useState} from "react";
import { useNavigation } from '@react-navigation/native';
import {bluetoothPermssionScan, bluetoothPermssionConnect} from "../../Services/Functions/permissions";


 const HomePageContent = ({ }) => {
    const [shouldShow , setShouldShow] = useState(true);
    const navigation = useNavigation();
    const pressable = async () => {
        if(shouldShow  == true){
            setShouldShow(!shouldShow);
        }
        if (Platform.OS === "android") {
            console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");
            const p = await bluetoothPermssionScan();  
            console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");
            console.log(p);
        }
        console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");    
        navigation.navigate('Bluetooth', {screen: 'Bluetooth'});
        console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");
    };
    
    return (
        <View style={styles.container}>
            <View style ={ styles.container}>
                <Text style={styles.words}>Searching for a controller</Text>
            </View>
            <View style={styles.BluetoothPlacement}>
                {shouldShow ? null : <BluetoothSymbol/>}
            </View>
            <View style={styles.buttonstyle}>
                <Button 
                title="Please Press To Search For A Bluetooth Connection" 
                onPress={pressable}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        alignContent:'center',
        alignItems:'center',
        flex:1,
        alignSelf:'center',
        justifyContent: 'center',

    },
    words:{
        textAlign:'center',
        paddingBottom:40,
        padding: 20,
        fontWeight:'bold',
        fontSize:25,
        flex:1,
    },

    buttonstyle:{
        flex:1,
        alignSelf:'center',
        alignContent: 'center',
        paddingHorizontal:30,
    },
    BluetoothPlacement:{
        alignContent:'center',
        paddingBottom: 25,
        flex:1,
    }

})



export default HomePageContent;


/*               const isAuthorizedBLTScan = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN);
                let isAuthorizedBLTConnect;

                if(!isAuthorizedBLTScan){
                    const bluetoothScan = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN);  
                    isAuthorizedBLTConnect = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT);      
                    
                    
                    if(!isAuthorizedBLTConnect){
                        const bluetoothConnect = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT);
                    
                        
                    }
                    else{

                        
                    }
                }
                else{

                    isAuthorizedBLTConnect = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT);   
                    if(!isAuthorizedBLTConnect){
                        const bluetoothConnect = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT);    
                    }
                    else{

                    }

                }
*/


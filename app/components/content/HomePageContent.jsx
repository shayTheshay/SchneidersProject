import { View, Image, Text, StyleSheet, Platform } from "react-native";
import BluetoothSymbol from "../BluetoothComponent";
import { Button } from "react-native";
import React, {useEffect, useState} from "react";
import { useNavigation } from '@react-navigation/native';



 const HomePageContent = ({ }) => {
    const [shouldShow , setShouldShow] = useState(true);

    const navigation = useNavigation();

    const pressable = () => {
     /*   useEffect(() => {
            
        })
*/

        if(shouldShow  == true)
            setShouldShow(!shouldShow);

            

            navigation.navigate('Bluetooth', {screen: 'Bluetooth'});
            


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
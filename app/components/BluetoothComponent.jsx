import React from "react";
import { StyleSheet } from "react-native";
import { Image, View } from "react-native";

const BlutoothSymbol = ()=> {
    return(
            <View style={styles.container}>
                <Image
                    source={require('../assets/Bluetooth-Gif-Green.gif')}
                    style={{ height: 150, width: 150 }} 
              />
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignContent:'center',
        alignItems:'center'
    }
});

export default BlutoothSymbol; 
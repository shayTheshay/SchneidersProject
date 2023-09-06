import { View, Image, Text, StyleSheet } from "react-native";
import BluetoothSymbol from "../BluetoothComponent";
import { Button } from "react-native";


 const HomePageContent = ({children, pressable}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.words}>Now </Text>
                


            <Button title="Please Press To Search A Bluetooth Connection" onPress={pressable}></Button>
            
        </View>
    )
}



const styles = StyleSheet.create({

    container:{
        alignContent:'center',
        alignItems:'center',
        flex:1,

    },
    words:{
        textAlign:'center',
        paddingBottom:40,
        padding: 20,
    },

    buttonstyle:{
        flex:1,
        alignSelf:'flex-end',

    }

})

export default HomePageContent;
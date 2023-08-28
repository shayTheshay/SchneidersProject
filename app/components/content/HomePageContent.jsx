import { View, Image, Text, StyleSheet } from "react-native";
import BluetoothSymbol from "../BluetoothComponent";


 const HomePageContent = ({children}) => {
    return (
        <View>
            <View style={styles.words}>
                <Text>Hey! please wait a second for the bluetooth to search for the controllers</Text>
            </View>
            <BluetoothSymbol></BluetoothSymbol>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        alignContent:'center',
        alignItems:'center'

    },
    words:{
        textAlign:'center',
        paddingBottom:20
    }

})

export default HomePageContent;
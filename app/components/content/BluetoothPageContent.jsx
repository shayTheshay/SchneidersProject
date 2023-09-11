import { View, Image, Text, StyleSheet } from "react-native";


 const BluetoothPageContent = ({children}) => {
    return (
        <View>
            <Text>V for victory</Text>
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

export default BluetoothPageContent;
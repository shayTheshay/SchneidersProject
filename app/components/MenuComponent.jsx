import { Image, StyleSheet, TouchableOpacity, View, Text  } from 'react-native';


const MenuTouch = () => {
const handleMenuPress = () => {
        
}
return (

<View style={styles.menu}>
    <TouchableOpacity onPress={handleMenuPress}>
    <Image
            source={require('../assets/menu.png')}
            style={{ width: 30, height: 30 }}
        />
    </TouchableOpacity>

</View>)
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        alignContent:'center',
        alignItems:'center',
        alignSelf:'center',
    },
});




export default MenuTouch;
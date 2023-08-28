import { Image, StyleSheet, TouchableOpacity, View, Text  } from 'react-native';


const MenuTouch = () => {
const handleMenuPress = () => {
        
}
return (

<View>
    <TouchableOpacity onPress={handleMenuPress}>
    <Image
            source={require('../assets/menu.png')}
            style={{ width: 30, height: 30 }}
        />
    </TouchableOpacity>

</View>)
}



export default MenuTouch;
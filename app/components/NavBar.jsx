import { Stack } from 'expo-router';
import { Image, StyleSheet, TouchableOpacity, View, Text, SafeAreaView  } from 'react-native';
import MenuTouch from './MenuComponent';

const NavBar = ({ className }) => {
    return (<View style= {styles.headerTitleContainer}>
        <View style= {styles.menu}>
            <MenuTouch></MenuTouch>
        </View>


    <View style={ styles.titleText }>
        <Text>Home Page</Text>
    </View>
</View>)
}




const styles = StyleSheet.create({
    title: {
        flex: 1,
        backgroundColor: '#90d6e0',
        width:'100vw'
    },
    titleText: {     
        width:'100vw',
        textAlign:'center',
        paddingRight:100,
    },
    headerTitleContainer: {
        flexDirection:'row',
        alignItems:'center',
        textAlign:'center', 
        textJustify:'center', 
        //justifyContent:'space-around', 
        width:'100vw'

    },
    menu :{
        paddingLeft:0,
    }
})

export default NavBar;
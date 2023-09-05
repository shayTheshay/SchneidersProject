import { Image, StyleSheet, View } from 'react-native';



 const SchneiderLogo = () =>{
    return(
        <View style ={styles.IconContainer} >
            <Image
                source={require('../assets/SchneiderLogo.png')}
                style={{ width: 100, height: 30 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    IconContainer: {
        flex: 1,
        flexDirection:'column-reverse',
        padding: 5,
    },
});


export default SchneiderLogo;


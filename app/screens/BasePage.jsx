import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';
import PageBottom from '../components/PageBottom';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function BasePage({ children }) {
    return (
        <SafeAreaView style={styles.components}>
                <View style={styles.container}>
                    {children}
                </View>

                <View style={styles.buttoncontainer}>
                    <PageBottom />
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center-around',
    },
    buttoncontainer: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center-around',
    },
    components: {
        flex: 1,
        backgroundColor: '#e5fff1',
        justifyContent: 'center-around',
        
    }
});

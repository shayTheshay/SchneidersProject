import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';
import PageBottom from '../components/PageBottom';
import { View } from 'react-native-web';


export default function BasePage({ children }) {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e5fff1' }}>
                <View style={styles.container}>
                    {children}
                </View>
            <PageBottom />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    icon: {
        flex: 1,
        padding: 2,
        paddingRight: 4,
        alignItems: 'flex-end',
        alignSelf: 'flex-end',

    },
    container: {
        flex: 15,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

import { Image, StyleSheet, View } from 'react-native';
import NavBar from './NavBar';
import Logo from './SchneiderLogoConponent';

const PageBottom = () => {
    return (
    <View style={styles.icon}>
        <Logo />
    </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        flex: 1,
        padding: 2,
        paddingRight: 4,
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        width:'100vm'
    },
});

export default PageBottom;
import React from 'react'
import Navigation from './Navigation/NavigationFile';
import { NavigationContainer } from '@react-navigation/native';




export default App =() => {
    return(
        <NavigationContainer independent = {true}>
            <Navigation/>
        </NavigationContainer>
    )
};

import React from "react";
import { Text } from "react-native-web";
import BluetoothPageContent from "../components/content/BluetoothPageContent"
import BasePage from "./BasePage";
import { View } from "react-native";

const BluetoothPage = ({children}) => {
    return(
     <BasePage>
        
        <BluetoothPageContent>
            {children}
        </BluetoothPageContent>
                
    </BasePage>
    )
}

export default BluetoothPage;
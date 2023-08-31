import React from "react";
import HomePageContent from "../components/content/HomePageContent"
import BasePage from "./BasePage";

const HomePage = ({children}) => {
    return(
     <BasePage>
        
         <HomePageContent>
            {children}
        </HomePageContent>
        
                
    </BasePage>
    )
}

export default HomePage;
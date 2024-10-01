import { createContext, useState } from "react";

export const AppContext = createContext("");

const AppContextProvider = (props) =>{

    const [showAllImages, setShowAllImages] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const value = {
        showAllImages,       // value to share
        setShowAllImages,    // function to update the value
        currentIndex,        // sharing currentIndex
        setCurrentIndex,
    };


   

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
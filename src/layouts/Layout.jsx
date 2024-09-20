import React from "react";
import Header from "./header";
import Footer from "./footer";
import AppContextProvider from "../context";

function Layout ({children}) {
    return(
        <AppContextProvider>
            <Header />

            {children}

            <Footer />

        </AppContextProvider>
    )
}

export default Layout;
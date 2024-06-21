import { ApplicationContext, applicationContext } from "@/contexts/ApplicationContext";
import React, { useState } from "react";

export default function ApplicationContextProvider({children}: {children: React.ReactNode}) {
    const [darkMode, setDarkMode] = useState(false);
    const switchMode = () => {
        setDarkMode(old => !old);
    }
    return <applicationContext.Provider value={{
        darkMode: darkMode,
        switchMode: switchMode
    }}>
        {children}
    </applicationContext.Provider>
}
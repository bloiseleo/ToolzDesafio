import React  from "react";

export interface ApplicationContext {
    darkMode: boolean,
    switchMode: () => void
}

export const applicationContext = React.createContext<ApplicationContext>({
    darkMode: false,
    switchMode: () => {}
});

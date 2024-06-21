import useAppContext from "@/viewmodel/useApplicationContext"
import React from "react";

export default function MainContainer({className = "", children}: {className: string, children: React.ReactNode}) {
    const {darkMode} = useAppContext();
    return <main className={(darkMode ? "dark ": "") + className}>
        {children}
    </main>
}
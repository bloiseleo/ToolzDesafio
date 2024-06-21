import React from "react";

export default function Button({children}: {children: React.ReactNode}) {
    return <button type="button" className="border hover:bg-backgroundDarkColor/10 hover:dark:bg-primary/10 transition-all w-[80px] lg:w-[137px] h-[48px] flex items-center justify-center border-1 dark:border-primary border-black rounded-lg">
        {children}
    </button>
}
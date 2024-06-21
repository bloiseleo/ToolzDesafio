import React from "react";

export default function RoundedContainer({children, className = "", onClick, borderColor = "border-primary"}: {children: React.ReactNode, className?: string, onClick?: () => void, borderColor?: string}) {
    return (
        <div
            onClick={onClick}
            className={`rounded-full flex justify-center items-center border-[1px] ${borderColor} ${onClick ? 'cursor-pointer': ''} ` + className}
        >
            {children}
        </div>
    );
}
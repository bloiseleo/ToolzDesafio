import React, { HTMLInputTypeAttribute, useRef } from "react";

export default function Input({
    icon, 
    placeholder, 
    label, 
    id, 
    type,
    data,
    handleChange,
    error = false
}: {
    icon: React.ReactNode, 
    placeholder: string, 
    label: string, 
    id: string, 
    type: HTMLInputTypeAttribute,
    data: any,
    handleChange: (data: any) => void,
    error: boolean
}) {
    const inputRef = useRef<HTMLInputElement>(null);
    return <div className="cursor-pointer" onClick={() => inputRef.current?.focus()} > 
        <label className="dark:text-primary" htmlFor={id}>{label}</label>
        <div className={`${error ? 'border-errorColor dark:border-errorColor': 'border-borderColor '}dark:border-borderColorDark  transition-all border rounded-lg h-[48px] items-center flex-row flex p-4 mt-2`}>
            <div className="mr-4">
                {icon}
            </div>
            <input 
                onChange={event => handleChange(event.target.value)}
                value={data}
                ref={inputRef}
                type={type}
                placeholder={placeholder} 
                className="w-full outline-none text-terciary dark:text-terciaryDark dark:bg-backgroundDarkColor text-[16px]" 
                name={id} id={id} />
        </div>
    </div>
}
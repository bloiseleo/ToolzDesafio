import { useState } from "react"

export default function CustomCheckbox({className = ''}: {className?: string}) {
    const [checked, setChecked] = useState(false);
    const checkTheBox = () => {
        setChecked(old => !old)
    }
    return <div className={'flex gap-x-4 items-center w-[190px] ' + className} onClick={checkTheBox}>
        <input
            onChange={() => {}}
            className='w-5 h-5 customCheckbox border-borderColor border-2 rounded-sm cursor-pointer appearance-none checked:bg-accent checked:border-accent'
            checked={checked}
            type='checkbox'
            id='keep_connect'
        />
        <label className="cursor-pointer text-sm dark:text-primary" htmlFor='keep_connect'>Manter conectado</label>
    </div>
}
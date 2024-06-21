import { useEffect, useState } from "react";

export default function Notifier({success, preDisappering}: {success: boolean, preDisappering: () => void}) {
    const [show, setShow] = useState(false);
    const [timer, setTimer] = useState(10);
    useEffect(() => {
        if(success) {
            setShow(true);
            const tick = setInterval(() => {
                setTimer(old => {
                    if(old == 0) {
                        clearInterval(tick);
                        setShow(false);
                        preDisappering();
                        return 10;
                    }
                    return old - 1;
                });
            }, 1000);
        }
    }, [success]);
    return <div className={(show ? "absolute": "hidden") + " items-center justify-center flex w-screen h-screen bg-disableIndicator/75 z-40 top-0 left-0"}>
        <div className="w-[300px] lg:w-[500px] text-center justify-around flex flex-col h-[200px] bg-backgroundDarkColor border-borderColorDark border-[1px] rounded-md p-4">
            <h1 className="text-primary text-md lg:text-xl">Usuário autenticado com sucesso!</h1>

            <p className="mt-2 text-primary text-sm lg:text-md">Obrigado por participar dessa experiência! Espero que tenham gostado!</p>
            <span className="text-terciaryDark text-sm">Fique tranquilo, vou fechar em {timer} segundos</span>
        </div>
    </div>;
}
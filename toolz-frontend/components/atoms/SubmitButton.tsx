import EnterSvg from "./EnterSvg";

export default function SubmitButton({onSubmit}: {onSubmit: () => void}) {
    return <button onClick={event => {
            event.preventDefault();
            onSubmit();
        }} className="bg-accent hover:bg-hoverAccent transition-all w-full h-12 rounded-lg text-primary flex items-center justify-center gap-x-3" type="submit">
        <div className="hidden lg:block">
            <EnterSvg />
        </div>
        Entrar
    </button>
}
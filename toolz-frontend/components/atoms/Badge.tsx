export default function Badge({text}: {text: string}) {
    return <div className="bg-accent inline pl-3 pt-2 pb-2 pr-3 rounded-full text-sm text-primary">
        <span className="text-[16px]">{text}</span>
    </div>
}
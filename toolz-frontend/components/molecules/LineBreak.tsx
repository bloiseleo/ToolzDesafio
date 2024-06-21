export default function LineBreak({className}: {className: string}) {
    return <div className={"flex items-center gap-x-4 " + className}>
        <div className="h-[1px] w-full lg:w-[271px] bg-black/10 dark:bg-primary/10"/>
        <span className="text-terciary dark:text-secundaryVariant uppercase  lg:normal-case">ou</span>
        <div className="h-[1px] w-full lg:w-[271px] bg-black/10 dark:bg-primary/10"/>
    </div>
}
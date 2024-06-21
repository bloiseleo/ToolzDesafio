import useAppContext from "@/viewmodel/useApplicationContext";
import CustomLink from "../atoms/CustomLink";
import BackButton from "./BackButton";

export default function MobileHeader() {
    const {darkMode} = useAppContext();
    return <div className='h-24 flex w-full lg:hidden dark:bg-backgroundDarkColor justify-between items-center dark:border-primary/10 border-b-black/10 border-b-[1px] p-6'>
        <BackButton color={darkMode ? 'white': 'black'} borderColor={darkMode ? 'border-primary':'border-black'} />
        <CustomLink color={darkMode ? 'primary': 'black'} className='text-lg flex dark:text-primary' href='#'>
            Criar conta
        </CustomLink>
    </div>
}
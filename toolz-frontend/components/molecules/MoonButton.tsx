import useAppContext from "@/viewmodel/useApplicationContext";
import MoonSvg from "../atoms/MoonSvg";
import RoundedContainer from "../atoms/RoundedContainer";

export default function MoonButton({
    containerClass = "", 
    iconWidth = 15, 
    iconHeight = 17 
}: {
    containerClass?: string, 
    iconWidth?: number, 
    iconHeight?: number
}) {
    const {switchMode} = useAppContext();
    return <RoundedContainer onClick={switchMode}  className={"w-[48px] h-[48px] dark:bg-primary " + containerClass}>
        <MoonSvg width={iconWidth} height={iconHeight}/>
    </RoundedContainer>
}
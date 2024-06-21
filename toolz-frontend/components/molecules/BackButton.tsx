import RoundedContainer from "../atoms/RoundedContainer";
import BackButtonSvg from "../atoms/BackButtonSvg";

export default function BackButton({
    containerClass = "", 
    iconWidth = 9, 
    iconHeight = 16,
    onClick,
    borderColor = "border-primary",
    color
}: {
    containerClass?: string, 
    iconWidth?: number, 
    iconHeight?: number,
    onClick?: () => void,
    borderColor?: string,
    color?: string
}) {
    const onClickButton = onClick ? () => {}: undefined;
    return <RoundedContainer borderColor={borderColor} onClick={onClick} className={"w-[48px] h-[48px] " + containerClass}>
        <BackButtonSvg color={color} onClick={onClickButton} width={iconWidth} height={iconHeight} active={true}/>
    </RoundedContainer>
}
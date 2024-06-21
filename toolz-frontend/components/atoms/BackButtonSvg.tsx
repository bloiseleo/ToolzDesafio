export default function BackButtonSvg({
    width = 9, 
    height = 16, 
    rotate = false,
    active = false,
    color,
    onClick
}: {
    width?: number, 
    height?: number, 
    rotate?: boolean, 
    active?: boolean,
    color?: string,
    onClick?: () => void
}) {
    let colorDefined = active ? '#ffffff': '#222222';
    if(color) {
        colorDefined = color;
    }
    return <svg 
    onClick={onClick}
    style={{
        rotate: rotate ? '180deg': '0deg',
        cursor: onClick ? 'pointer': 'auto'
    }} width={width} height={height} viewBox={`0 0 9 16`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill={colorDefined} d="M7.24219 15.0977L0.808594 8.38281C0.632812 8.17188 0.5625 7.96094 0.5625 7.75C0.5625 7.57422 0.632812 7.36328 0.773438 7.1875L7.20703 0.472656C7.52344 0.121094 8.08594 0.121094 8.40234 0.4375C8.75391 0.753906 8.75391 1.28125 8.4375 1.63281L2.56641 7.75L8.47266 13.9375C8.78906 14.2539 8.78906 14.8164 8.4375 15.1328C8.12109 15.4492 7.55859 15.4492 7.24219 15.0977Z" />
    </svg>

}
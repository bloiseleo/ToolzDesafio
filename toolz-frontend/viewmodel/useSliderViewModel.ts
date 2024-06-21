import { useRef, useState } from "react";

export default function useSliderViewModel(getActiveCarouselItem: () => number) {
    const [position, setPosition] = useState<number>(0);
    const moving = useRef(false);
    const moveBarForwards = () => {
        if(moving.current) {
            return;
        }
        const intervalTick = setInterval(() => {
            moving.current = true;
            setPosition(old => {
                const idealMoveQuantity = (110 * ((getActiveCarouselItem() % 3) + 1));
                if(
                    old == idealMoveQuantity
                ) {
                    clearInterval(intervalTick);
                    moving.current = false;
                    return old;
                }
                return old + 10;
            });
        }, 0);
        
    }
    const moveBarDownwards = () => {
        if(moving.current) {
            return;
        }
        const intervalTick = setInterval(() => {
            moving.current = true;
            setPosition(old => {
                if(old == (position - 110)) {
                    clearInterval(intervalTick);
                    moving.current = false;
                    return old;
                }
                return old - 10;
            });
        }, 0);
    }
    return {moveBarDownwards, moveBarForwards, position, moving}
}
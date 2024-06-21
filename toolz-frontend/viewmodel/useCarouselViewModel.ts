import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

export default function useCarouselViewModel(
    images: Array<{alt: string, src: string | StaticImageData}>, 
    doWhenIncrement: () => void, 
    doWhenDecrement: () => void
) {
    const [activeCarouselItem, setCarouselItem] = useState<number>(0);
    const [hasElementsToDirections, setHasElementsToDirections] = useState<{
        hasElementsToLeft: boolean,
        hasElementsToRight: boolean
    }>({
        hasElementsToLeft: false,
        hasElementsToRight: true
    });
    useEffect(() => {
        setHasElementsToDirections({
            hasElementsToLeft: activeCarouselItem > 0,
            hasElementsToRight: (images.length - 1) > activeCarouselItem
        })
    }, [activeCarouselItem]);
    const onIncrement = () => {
        doWhenIncrement();
    }
    const onDecrement = () => {
        doWhenDecrement();
    }
    const increment = () => {
        if(images.length != 0 && (images.length - 1) > activeCarouselItem) {
            setCarouselItem(old => old + 1);
            onIncrement();
        }
    }
    const decrement = () => {
        if(images.length != 0 && activeCarouselItem != 0) {
            setCarouselItem(old => old - 1);
            onDecrement();
        }
    }
    const {
        hasElementsToLeft,
        hasElementsToRight
    } = hasElementsToDirections;

    return {
        increment, 
        decrement, 
        activeCarouselItem, 
        hasElementsToDirections, 
        hasElementsToLeft, 
        hasElementsToRight
    };
}
import Image, { StaticImageData } from "next/image";
import React from "react";
import MoonButton from "../molecules/MoonButton";
import BackButton from "../molecules/BackButton";
import Badge from "../atoms/Badge";
import BackButtonSvg from "../atoms/BackButtonSvg";
import useCarouselViewModel from "@/viewmodel/useCarouselViewModel";
import useSliderViewModel from "@/viewmodel/useSliderViewModel";
import Slider from "../atoms/Slider";

export default function CarouselSection({ 
    className = "", 
    images = []}: { 
        className?: string, 
        images: Array<{alt: string, src: string | StaticImageData}> 
    }) {
    const {position, moveBarDownwards, moveBarForwards, moving} = useSliderViewModel(() => activeCarouselItem);
    const {activeCarouselItem, decrement, increment, hasElementsToLeft, hasElementsToRight } = useCarouselViewModel(
        images, 
        moveBarForwards, 
        moveBarDownwards
    );
    return <section className={"relative hidden lg:flex lg:flex-col lg:justify-between w-full" + className}>
        <section className="hidden lg:flex h-full w-full flex-col justify-between">
            <div className="absolute -z-10 w-full h-full">
                {
                    images.map(({alt, src}, index) => <Image
                        key={src.toString() + index}
                        alt={alt}
                        src={src}
                        fill={true}
                        className={`absolute object-cover ${index == activeCarouselItem ? 'transitionOpacityCustom': 'opacity-0 transitionOpacityCustom'}`}
                    />)
                }
                <div className="absolute bg-gradient-to-t from-black to-transparent w-full h-full"></div>
            </div>
            <section className="ml-14 mr-14 mt-20 flex justify-between">
                <BackButton onClick={() => {
                    if(!moving.current) decrement();
                }}/>
                <MoonButton />
            </section>
            <section className="ml-14 mr-14 mt-20 mb-20 h-[316px] flex flex-col justify-between">
                <div>
                    <Badge text="Cursos" />
                    <section className="mt-6">
                        <h3 className="text-primary font-semibold text-2xl mb-4">Plataforma de cursos completa</h3>
                        <p className="text-secundaryVariant font-medium leading-7">
                            Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum
                        </p>
                    </section>
                </div>
                <div className="flex items-center justify-between">
                    <Slider position={position}/>
                    <div className="flex items-center justify-center gap-x-[30px]">
                        <BackButtonSvg onClick={() => {
                            if(!moving.current) decrement();
                        }} width={20} height={32} active={hasElementsToLeft}/>
                        <BackButtonSvg onClick={() => {
                            if(!moving.current) increment();
                        }}  width={20} height={32} rotate={true} active={hasElementsToRight}/>
                    </div>
                </div>
            </section>
        </section>
    </section>
}
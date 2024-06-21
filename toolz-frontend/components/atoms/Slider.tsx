import { useRef, useState } from "react";

export default function Slider({position}:{position: number}) {
    return <div className="flex gap-x-4 relative">
        <div style={{
            left: position
        }} className="w-24 h-1 absolute rounded-full bg-primary"></div>
        <div className={`w-24 h-1 rounded-full bg-disableIndicator`} />
        <div className={`w-24 h-1 rounded-full bg-disableIndicator`} />
        <div className={`w-24 h-1 rounded-full bg-disableIndicator`} />
    </div>
}
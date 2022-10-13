import React from "react";
import Lottie from "lottie-react";
import codingAnimation from "../public/lottie/hero-animation.json";
import { useState, useEffect } from "react";

export default function HeroAnimation() {

    const [active, setActive] = useState(false);

    useEffect(()=>{
        let timeout = 1000;
        setTimeout(()=>{
            setActive(true);
        }, timeout)
    }, [])

    let className="opacity-0 -translate-y-[20px] transition ease-in-out duration-500";
    if (active) className="hidden lg:block lg:w-[300px] lg:h-[300px] opacity-100 -translate-y-0 transition ease-in-out duration-500";

    return <Lottie className={className} animationData={codingAnimation} loop={true} />
}
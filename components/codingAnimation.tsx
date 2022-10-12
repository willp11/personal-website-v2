import React from "react";
import Lottie from "lottie-react";
import codingAnimation from "../public/lottie/coding-boy-animation.json";

export default function CodingAnimation() {
    return <Lottie className="w-[350px]" animationData={codingAnimation} loop={true} />
}
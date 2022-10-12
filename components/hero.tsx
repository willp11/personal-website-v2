import { useState, useEffect } from "react";

export default function Hero() {

    const [active, setActive] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setActive(true);
        }, 1000)
    }, [])

    let myNameIsClass = "opacity-0 -translate-y-[20px] transition ease-in-out duration-500";
    if (active) myNameIsClass = "opacity-1 translate-y-0 transition ease-in-out duration-500 text-xl max-w-[500px] text-teal-300";

    let nameClass = "opacity-0 -translate-y-[20px] transition ease-in-out duration-500 ";
    if (active) nameClass = "opacity-1 translate-y-0 transition ease-in-out duration-500 text-slate-300 text-7xl font-bold pt-6";

    let jobClass = "opacity-0 -translate-y-[20px] transition ease-in-out duration-500 ";
    if (active) jobClass = "opacity-1 translate-y-0 transition ease-in-out duration-500 text-slate-500 text-7xl font-bold pt-2";

    let paraClass = "opacity-0 -translate-y-[20px] transition ease-in-out duration-500 ";
    if (active) paraClass = "opacity-1 translate-y-0 transition ease-in-out duration-500 text-slate-300 pt-8 max-w-[500px] font-semibold";

    let btnClass = "opacity-0 -translate-y-[20px] transition ease-in-out duration-500 ";
    if (active) btnClass = "opacity-1 translate-y-0 transition ease-in-out duration-500 ";

    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="w-full max-w-[1000px]">
                <p className={myNameIsClass} style={{transitionDelay: '200ms'}}><span className="absolute animate-waving-hand">&#128075;</span><span className="pl-8"> Hi, my name is</span></p>
                <h1 className={nameClass} style={{transitionDelay: '400ms'}}>William Page</h1>
                <h2 className={jobClass} style={{transitionDelay: '600ms'}}>Software Engineer</h2>
                <p className={paraClass} style={{transitionDelay: '800ms'}}>I'm a software engineer specializing in building full-stack web applications with React/NextJS frontend and Python Django backend. My goal is to build large-scale applications used by millions of people.</p>
                <div style={{fontFamily: "Ubuntu-Mono", transitionDelay: '1000ms'}} className={btnClass}>
                    <div className="text-teal-300 border border-teal-300 px-4 py-2 mt-8 w-[250px] cursor-pointer rounded-md hover:bg-slate-800 transition duration-500 ease-in-out">Check out my portfolio!</div>
                </div>
            </div>
        </div>
    )
}
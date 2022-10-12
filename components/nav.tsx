import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useEffect, useState } from 'react';

const menuItems = [
    "About",
    "Experience",
    "Work",
    "Contact",
    "Resume"
]

export default function Nav() {

    const [active, setActive] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setActive(true);
        }, 1)
    }, [])

    // Menu
    let className = "opacity-0 -translate-y-[20px] transition ease-in-out duration-500 group cursor-pointer";
    if (active) className = "opacity-1 translate-y-0 transition ease-in-out duration-500 group cursor-pointer";

    let menu = menuItems.map((item, i)=>{
        if (item === "Resume") {
            return (
                <div style={{fontFamily: "Ubuntu-Mono", transitionDelay: `${i * 200}ms`}} key={i} className={className}>
                    <div className="text-teal-300 border border-teal-300 px-4 py-2 ml-4 rounded-md hover:bg-slate-800 transition duration-500 ease-in-out">{item}</div>
                </div>
            )
        } else {
            return (
                <div key={i} style={{ transitionDelay: `${i * 200}ms`, fontFamily: "Ubuntu-Mono", padding: "1rem" }} className={className}>
                    <span className="text-teal-300 cursor-pointer">0{i+1}. </span>
                    <span className="text-slate-300 group-hover:text-teal-300 transition duration-500 ease-in-out">{item}</span>
                </div>
            )
        }
    })

    // logo
    let logo = (
        <div className="py-4">
            <h2 className="text-teal-300 font-bold tracking-tighter text-2xl">WP</h2>
        </div>
    )

    return (
        <div className="fixed w-full">
            <div className="max-w-[1536px] mx-auto flex justify-between items-center py-4 px-8">
                {logo}
                <div className="flex items-center">
                    {menu}
                </div>
            </div>
        </div>
    )
}
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";
import Logo from "./logo";

export default function MobileNav({menuItems, active, setActive}: {menuItems: string[], active: boolean, setActive: Dispatch<SetStateAction<boolean>>}) {

    // transition menu in
    let className = "w-full h-screen fixed top-0 left-0 bg-slate-800 z-20 -translate-x-full transition ease-in-out duration-300";
    if (active) className = "w-full h-screen fixed top-0 left-0 bg-slate-800 z-20 -translate-x-0 md:-translate-x-full transition ease-in-out duration-300 flex items-center justify-center";

    // menu items
    let menu = menuItems.map((item, i)=>{
        if (item === "Resume") {
            return (
                <div 
                    key={i} 
                    style={{fontFamily: "Ubuntu-Mono"}}
                    className="text-teal-300 border border-teal-300 px-4 py-2 mt-4 rounded-md hover:bg-slate-700 transition duration-500 ease-in-out cursor-pointer"
                >
                    {item}
                </div>
            )
        } else {
            return (
                <div key={i} style={{fontFamily: "Ubuntu-Mono", padding: "1rem" }}>
                    <a href={`#${item}`} className="group" onClick={()=>setActive(false)} aria-label={`Navigate to ${item}`}>
                        <span className="text-teal-300 cursor-pointer">0{i+1}. </span>
                        <span className="text-slate-300 group-hover:text-teal-300 transition duration-500 ease-in-out">{item}</span>
                    </a>
                </div>
            )
        }
    })

    return (
        <div className={className}>
            <div className="absolute top-7 left-7">
                <Logo />
            </div>
            <XMarkIcon className="absolute top-7 right-7 w-9 h-9 stroke-teal-300 cursor-pointer" onClick={()=>setActive(false)}/>
            <nav className="w-full flex flex-col items-center justify-center text-lg">
                {menu}
            </nav>
        </div>
    )
}
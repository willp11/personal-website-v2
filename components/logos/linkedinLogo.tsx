import { useState } from "react";
import { Size } from "./types";

export default function LinkedinLogo({size}: {size: Size}) {

    const [hover, setHover] = useState(false);

    let className="cursor-pointer transition ease-in-out duration-300";
    if (size === "medium") {
        className="cursor-pointer transition ease-in-out duration-300 scale-[1.5]";
    } else if (size === "large") {
        className="cursor-pointer transition ease-in-out duration-300 scale-[2.5]";
    }

    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
            fill={hover ? "#5eead4" : "#cbd5e1"} 
            onMouseEnter={()=>setHover(true)} 
            onMouseLeave={()=>setHover(false)}
        >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/>
        </svg>
    )
}
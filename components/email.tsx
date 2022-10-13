import {useState, useEffect} from 'react';

export default function Email() {

    const [active, setActive] = useState(false);

    useEffect(()=>{
        let timeout = 2000;
        setTimeout(()=>{
            setActive(true);
        }, timeout)
    }, [])

    let className = "opacity-0 -translate-y-[20px] transition ease-in-out duration-500";
    if (active) className = "opacity-100 -translate-y-0 transition ease-in-out duration-500 hidden xl:flex items-center fixed bottom-40 -right-20 rotate-90";

    return (
        <div className={className}>
            <a href="mailto: willp111@protonmail.com">
                <p style={{fontFamily: "Ubuntu-Mono"}} 
                    className="cursor-pointer text-slate-300 hover:text-teal-300 text-lg transition ease-in-out duration 300"
                >
                    willp111@protonmail.com
                </p>
            </a>
            <div className="h-[1px] w-[100px] bg-slate-400 ml-8"></div>
        </div>
    )
}
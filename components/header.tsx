import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import {Bars3Icon} from '@heroicons/react/24/outline';
import Nav from './nav';
import Logo from './logo';

export default function Header({menuItems, setShowMobileNav}: {menuItems: string[], setShowMobileNav: Dispatch<SetStateAction<boolean>>}) {

    // start showing the menu items when active
    const [active, setActive] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setActive(true);
        }, 1)
    }, [])

    // hide header when user scrolls
    const [divClass, setDivClass] = useState("");
    useEffect(()=>{
        var prevScrollpos = window.pageYOffset;
        let className = "fixed w-full z-10 bg-slate-900 shadow-md opacity-90 transition ease-in-out";
        setDivClass(className);
        window.onscroll = function() {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos || currentScrollPos === 0) {
                className = "fixed w-full z-10 bg-slate-900 shadow-md opacity-90 transition ease-in-out duration-300";
                setDivClass(className);
            } else {
                className = "fixed w-full z-10 bg-slate-900 shadow-md opacity-90 transition ease-in-out duration-300 -translate-y-24"
                setDivClass(className);
            }
            prevScrollpos = currentScrollPos;
        }
    }, [])

    // logo
    let logo = (
        <div className="py-4">
            <Logo />
        </div>
    )

    return (
        <div className={divClass}>
            <div className="max-w-[1536px] mx-auto flex justify-between items-center py-4 px-8">
                {logo}

                <Nav menuItems={menuItems} active={active} />

                <div className='flex md:hidden' onClick={()=>setShowMobileNav(true)}>
                    <Bars3Icon className="w-9 h-9 stroke-teal-300 cursor-pointer"/>
                </div>

            </div>
        </div>
    )
}
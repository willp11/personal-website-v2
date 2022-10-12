import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import {Bars3Icon} from '@heroicons/react/24/outline';
import Nav from './nav';
import Logo from './logo';

export default function Header({menuItems, setShowMobileNav}: {menuItems: string[], setShowMobileNav: Dispatch<SetStateAction<boolean>>}) {

    const [active, setActive] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setActive(true);
        }, 1)
    }, [])

    // logo
    let logo = (
        <div className="py-4">
            <Logo />
        </div>
    )

    return (
        <div className="fixed w-full z-10">
            <div className="max-w-[1536px] mx-auto flex justify-between items-center py-4 px-8">
                {logo}

                <Nav menuItems={menuItems} active={active} />

                <div className='flex md:hidden' onClick={()=>setShowMobileNav(true)}>
                    <Bars3Icon className="w-9 h-9 stroke-teal-300" />
                </div>

            </div>
        </div>
    )
}
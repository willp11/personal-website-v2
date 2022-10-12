import { useEffect, useState } from 'react';
import {Bars3Icon} from '@heroicons/react/24/outline';
import Nav from './nav';

const menuItems = [
    "About",
    "Experience",
    "Work",
    "Contact",
    "Resume"
]

export default function Header() {

    const [active, setActive] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setActive(true);
        }, 1)
    }, [])

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

                <Nav menuItems={menuItems} active={active} />

                <div className='flex md:hidden'>
                    <Bars3Icon className="w-9 h-9 stroke-teal-300" />
                </div>
            </div>
        </div>
    )
}
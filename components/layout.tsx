import React from "react";
import Header from "./header";
import { useState } from "react";
import MobileNav from "./mobileNav";
import MediaSideLinks from "./mediaSideLinks";
import Email from "./email";

const menuItems = [
    "About",
    "Portfolio",
    "Contact",
    "Blog",
    "Resume"
]

export default function Layout({children}: {children: React.ReactNode}) {

    const [showMobileNav, setShowMobileNav] = useState(false);

    return (
        <div className="relative w-full min-h-screen bg-slate-900 px-1">
            <Header menuItems={menuItems} setShowMobileNav={setShowMobileNav} />
            <MobileNav menuItems={menuItems} active={showMobileNav} setActive={setShowMobileNav} />
            <div className="max-w-[1536px] mx-auto px-8">
                {children}
            </div>
            <MediaSideLinks />
            <Email />
        </div>
    )
}
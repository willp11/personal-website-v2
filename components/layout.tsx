import React from "react";
import Header from "./header";

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="relative w-full min-h-screen bg-slate-900 px-1">
            <Header />
            <div className="max-w-[1536px] mx-auto px-8">
                {children}
            </div>
        </div>
    )
}
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import React from "react";
import GithubLogo from "./logos/githubLogo";

type Side = 'left' | 'right';

export default function Project({name, side, children}: {name: string, side: Side, children: React.ReactNode}) {

    let H2className = "";
    let divClassName = "";
    if (side === "right"){
        H2className = "text-slate-300 font-bold text-2xl pb-8 before:w-full md:before:w-full before:h-full before:absolute before:left-0 md:before:-left-[80%] before:top-0 before:bg-[url('/images/pod-app.jpg')] before:bg-cover before:opacity-20 md:before:opacity-40 before:inset-0 before:-z-10";
        divClassName = "relative mb-16 flex flex-col items-end p-8 md:p-0";
    } else if (side === "left") {
        H2className = "text-slate-300 font-bold text-2xl pb-8 before:w-full md:before:w-full before:h-full before:absolute before:left-0 md:before:left-[80%] before:top-0 before:bg-[url('/images/pod-app.jpg')] before:bg-cover before:opacity-20 md:before:opacity-40 before:inset-0 before:-z-10";
        divClassName = "relative mb-16 flex flex-col items-start p-8 md:p-0";
    }

    return (
        <div className={divClassName}>
            <p style={{fontFamily: "Ubuntu-Mono"}} className="text-teal-300 z-10">Featured Project</p>
            <h2 className={H2className}>{name}</h2>
            {children}
            <div className="flex mt-4" aria-label="External Link">
                <ArrowTopRightOnSquareIcon className="w-6 h-6 stroke-slate-300 hover:stroke-teal-300 transition ease-in-out duration-300 cursor-pointer mr-4" />
                <GithubLogo size="small" />
            </div>
        </div>
    )
}
import { ArrowTopRightOnSquareIcon, CameraIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import React from "react";
import GithubLogo from "./logos/githubLogo";
import {useImagesModal} from '../hooks/useImagesModal';

type Side = 'left' | 'right';
interface IProjectProps {
    name: string,
    side: Side,
    index: number,
    beforeImgClass: string,
    github: string,
    liveUrl: string,
    children: React.ReactNode
}

export default function Project({name, side, index, beforeImgClass, github, liveUrl, children}: IProjectProps) {

    const { setShowProjectImages, setProjectIndex } = useImagesModal();
    
    const showProjectImagesHandler = () => {
        if (setShowProjectImages) setShowProjectImages(true);
        if (setProjectIndex) setProjectIndex(index);
    }

    let H2className = "";
    let divClassName = "";
    if (side === "right"){ // before:-left-[80%]
        H2className = `text-slate-300 font-bold text-2xl pb-8 before:w-full before:h-full before:absolute before:left-0 md:before:-left-[80%] before:top-0 
                        ${beforeImgClass} before:bg-cover before:opacity-10 md:before:opacity-60 before:inset-0 before:-z-10`;
        divClassName = "relative mb-16 p-4 md:p-0 flex flex-col items-end"; // items-end
    } else if (side === "left") { // before:left-[80%]
        H2className = `text-slate-300 font-bold text-2xl pb-8 before:w-full before:h-full before:absolute before:left-0 md:before:left-[80%] before:top-0 
                        ${beforeImgClass} before:bg-cover before:opacity-10 md:before:opacity-60 before:inset-0 before:-z-10`;
        divClassName = "relative mb-16 p-4 md:p-0 flex flex-col items-start"; // items-start
    }

    return (
        <div className={divClassName}>
            <p style={{fontFamily: "Ubuntu-Mono"}} className="text-teal-300 z-10">Featured Project</p>
            <h2 style={{}} className={H2className}>{name}</h2>
            {children}
            <div className="flex mt-4">
                {/* <VideoCameraIcon className="w-6 h-6 stroke-slate-300 hover:stroke-teal-300 transition ease-in-out duration-300 cursor-pointer mr-4" /> */}
                {setShowProjectImages && <CameraIcon onClick={()=>showProjectImagesHandler()} className="w-6 h-6 stroke-slate-300 hover:stroke-teal-300 transition ease-in-out duration-300 cursor-pointer mr-4" />}
                <a href={liveUrl} target="_blank" rel="noreferrer" aria-label={`Link to ${name} project live site`}>
                    <ArrowTopRightOnSquareIcon className="w-6 h-6 stroke-slate-300 hover:stroke-teal-300 transition ease-in-out duration-300 cursor-pointer mr-4" />
                </a>
                <a href={github} target="_blank" rel="noreferrer" aria-label={`Link to ${name} github page`}>
                    <GithubLogo size="small" />
                </a>
            </div>
        </div>
    )
}
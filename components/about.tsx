import { PlusCircleIcon } from "@heroicons/react/24/outline";
import CodingAnimation from "./codingAnimation";
import {useRef, useState, useEffect} from 'react';

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
}

const technologies = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React JS",
    "Next JS",
    "Tailwind",
    "Python",
    "Django",
    "SQL"
]

export default function About() {

    // when section intersects the window, transitions in
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries: any) => {
        const [ entry ] = entries;
        if (entry.isIntersecting) setIsVisible(true);
    }

    useEffect(()=>{
        const observer = new IntersectionObserver(callbackFunction, options);
        if (containerRef.current) observer.observe(containerRef.current);
        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        }
    }, [])

    let className="w-full h-full opacity-0 -translate-x-full transition in-ease-out duration-1000";
    if (isVisible) className="w-full h-full opacity-100 -translate-x-0 transition in-ease-out duration-1000 flex flex-col md:flex-row pb-8"

    // List of technologies
    const tech_list = technologies.map((tech)=>{
        return (
            <div className="flex items-center">
                <PlusCircleIcon className="stroke-teal-300 h-3 w-3 mr-2" />
                <li className="text-slate-300" style={{fontFamily: "Ubuntu-Mono"}}>{tech}</li>
            </div>
        )
    })

    return (
        <section ref={containerRef} className="w-full min-h-[500px] max-w-[1000px] mx-auto">
            <div className={className}>
                <div className="md:pr-16">
                    <h2>
                        <span className="text-2xl text-teal-300" style={{fontFamily: 'Ubuntu-Mono'}}>01. </span>
                        <span className="text-3xl font-bold text-slate-300 after:h-[1px] after:w-[100px] xs:after:w-[200px] sm:after:w-[300px] after:inline after:absolute after:mt-5 after:ml-5 after:bg-slate-600">About Me</span>
                    </h2>
                    <p className="w-full max-w-[500px] text-slate-400 pt-8 pb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className="w-full max-w-[500px] text-slate-400">Here are some of the technologies I have been working with recently:</p>
                    <ul className="w-full max-w-[500px] grid grid-cols-2">
                        {tech_list}
                    </ul>
                </div>
                <CodingAnimation />
            </div>
        </section>
    )
}
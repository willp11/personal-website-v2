import { useEffect, useState } from "react";
import Observer from "./observer";
import Project from "./project";
import { Dispatch, SetStateAction } from "react";

const project1_technologies = [
    "Typescript",
    "React JS",
    "Next JS",
    "Tailwind",
    "Django"
]

const project2_technologies = [
    "Typescript",
    "React JS",
    "Next JS",
    "Tailwind",
    "Django"
]

export default function Portfolio({setShowProjectImages}: {setShowProjectImages: Dispatch<SetStateAction<boolean>>}) {

    const [width, setWidth] = useState(0);

    function windowResized() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", windowResized); 
        return () => window.removeEventListener("resize", windowResized);
    }, []);

    const p1_tech_list = project1_technologies.map(tech=>{
        return (
            <p key={`p1-${tech}`} style={{fontFamily: "Ubuntu-Mono"}} className={width <= 768 ? "text-slate-300 pr-8 hover:text-teal-300" : "text-slate-300 pl-8 hover:text-teal-300"}>{tech}</p>
        )
    });

    const p2_tech_list = project2_technologies.map(tech=>{
        return (
            <p key={`p2-${tech}`} style={{fontFamily: "Ubuntu-Mono"}} className="text-slate-300 pr-8 hover:text-teal-300">{tech}</p>
        )
    });

    const p3_tech_list = project1_technologies.map(tech=>{
        return (
            <p key={`p3-${tech}`} style={{fontFamily: "Ubuntu-Mono"}} className={width <= 768 ? "text-slate-300 pr-8 hover:text-teal-300" : "text-slate-300 pl-8 hover:text-teal-300"}>{tech}</p>
        )
    });

    return (
        <Observer>
            <div id="Portfolio" className="w-full overflow-x-hidden mt-16 mb-8">
                <h2 className="mb-8">
                    <span className="text-2xl text-teal-300" style={{fontFamily: 'Ubuntu-Mono'}}>02. </span>
                    <span 
                        className="text-3xl font-bold text-slate-300 after:h-[1px] 
                            after:w-[100px] xs:after:w-[200px] sm:after:w-[300px]
                            after:inline after:absolute after:mt-5 after:ml-5 after:bg-slate-600"
                    >
                        Portfolio</span>
                </h2>
                <div className={width <= 768 ? "w-full flex flex-col items-start" : "w-full flex flex-col items-end"}>
                    <Project name="Print on Demand" side={width <= 768 ? "left" : "right"} setShowProjectImages={setShowProjectImages}>
                        <div className="w-full max-w-[500px] bg-[#112240] rounded px-8 py-4 z-10">
                            <p className={width <= 768 ? "text-slate-400 text-left" : "text-slate-400 text-right"}>
                                <span className="text-teal-300">E-commerce</span> website with built in <span className="text-teal-300">product customizer</span>. 
                                Users can upload images and add text to <span className="text-teal-300">create clothing designs</span>.
                                They can save their designs to use again and apply to all products found in the store.
                                Designs are <span className="text-teal-300">transformed into high-resolution images</span>, ready for printing onto apparel.
                            </p>
                        </div>
                        <div className="flex flex-wrap mt-4 z-10">
                            {p1_tech_list}
                        </div>
                    </Project>
                </div>

                <div className="w-full flex flex-col items-start overflow-hidden">
                    <Project name="Print on Demand" side="left" setShowProjectImages={setShowProjectImages}>
                        <div className="w-full max-w-[500px] bg-[#112240] rounded px-8 py-4 z-10">
                            <p className="text-slate-400 text-left">
                                <span className="text-teal-300">E-commerce</span> website with built in <span className="text-teal-300">product customizer</span>. 
                                Users can upload images and add text to <span className="text-teal-300">create clothing designs</span>.
                                They can save their designs to use again and apply to all products found in the store.
                                Designs are <span className="text-teal-300">transformed into high-resolution images</span>, ready for printing onto apparel.
                            </p>
                        </div>
                        <div className="flex flex-wrap mt-4 z-10">
                            {p2_tech_list}
                        </div>
                    </Project>
                </div>

                <div className={width <= 768 ? "w-full flex flex-col items-start" : "w-full flex flex-col items-end"}>
                    <Project name="Print on Demand" side={width <= 768 ? "left" : "right"} setShowProjectImages={setShowProjectImages}>
                        <div className="w-full max-w-[500px] bg-[#112240] rounded px-8 py-4 z-10">
                            <p className={width <= 768 ? "text-slate-400 text-left" : "text-slate-400 text-right"}>
                                <span className="text-teal-300">E-commerce</span> website with built in <span className="text-teal-300">product customizer</span>. 
                                Users can upload images and add text to <span className="text-teal-300">create clothing designs</span>.
                                They can save their designs to use again and apply to all products found in the store.
                                Designs are <span className="text-teal-300">transformed into high-resolution images</span>, ready for printing onto apparel.
                            </p>
                        </div>
                        <div className="flex flex-wrap mt-4 z-10">
                            {p3_tech_list}
                        </div>
                    </Project>
                </div>

                <div className="w-full flex flex-col items-start overflow-hidden">
                    <Project name="Print on Demand" side="left" setShowProjectImages={setShowProjectImages}>
                        <div className="w-full max-w-[500px] bg-[#112240] rounded px-8 py-4 z-10">
                            <p className="text-slate-400 text-left">
                                <span className="text-teal-300">E-commerce</span> website with built in <span className="text-teal-300">product customizer</span>. 
                                Users can upload images and add text to <span className="text-teal-300">create clothing designs</span>.
                                They can save their designs to use again and apply to all products found in the store.
                                Designs are <span className="text-teal-300">transformed into high-resolution images</span>, ready for printing onto apparel.
                            </p>
                        </div>
                        <div className="flex flex-wrap mt-4 z-10">
                            {p2_tech_list}
                        </div>
                    </Project>
                </div>
            </div>
        </Observer>
    )
}
import Observer from "./observer";
import Project from "./project";

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

export default function Portfolio() {

    const p1_tech_list = project1_technologies.map(tech=>{
        return (
            <p style={{fontFamily: "Ubuntu-Mono"}} className="text-slate-300 pl-8">{tech}</p>
        )
    });

    const p2_tech_list = project2_technologies.map(tech=>{
        return (
            <p style={{fontFamily: "Ubuntu-Mono"}} className="text-slate-300 pr-8">{tech}</p>
        )
    });

    return (
        <Observer>
            <div className="w-full">
                <h2 className="mb-8">
                    <span className="text-2xl text-teal-300" style={{fontFamily: 'Ubuntu-Mono'}}>02. </span>
                    <span 
                        className="text-3xl font-bold text-slate-300 after:h-[1px] 
                            after:w-[100px] xs:after:w-[200px] sm:after:w-[300px]
                            after:inline after:absolute after:mt-5 after:ml-5 after:bg-slate-600"
                    >
                        Portfolio</span>
                </h2>
                <div className="w-full flex flex-col items-end">
                    <Project name="Print on Demand" side="right">
                        <div className="w-[500px] bg-[#112240] rounded px-8 py-4 z-10">
                            <p className="text-slate-400 text-right">
                                <span className="text-teal-300">E-commerce</span> website with built in <span className="text-teal-300">product customizer</span>. 
                                Users can upload images and add text to <span className="text-teal-300">create clothing designs</span>.
                                They can save their designs to use again and apply to all products found in the store.
                                Designs are <span className="text-teal-300">transformed into high-resolution images</span>, ready for printing onto apparel.
                            </p>
                        </div>
                        <div className="flex mt-4 z-10">
                            {p1_tech_list}
                        </div>
                    </Project>
                </div>

                <div className="w-full flex flex-col items-start overflow-hidden">
                    <Project name="Print on Demand" side="left">
                        <div className="w-[500px] bg-[#112240] rounded px-8 py-4 z-10">
                            <p className="text-slate-400 text-left">
                                <span className="text-teal-300">E-commerce</span> website with built in <span className="text-teal-300">product customizer</span>. 
                                Users can upload images and add text to <span className="text-teal-300">create clothing designs</span>.
                                They can save their designs to use again and apply to all products found in the store.
                                Designs are <span className="text-teal-300">transformed into high-resolution images</span>, ready for printing onto apparel.
                            </p>
                        </div>
                        <div className="flex mt-4 z-10">
                            {p2_tech_list}
                        </div>
                    </Project>
                </div>

                <div className="w-full flex flex-col items-end">
                    <Project name="Print on Demand" side="right">
                        <div className="w-[500px] bg-[#112240] rounded px-8 py-4 z-10">
                            <p className="text-slate-400 text-right">
                                <span className="text-teal-300">E-commerce</span> website with built in <span className="text-teal-300">product customizer</span>. 
                                Users can upload images and add text to <span className="text-teal-300">create clothing designs</span>.
                                They can save their designs to use again and apply to all products found in the store.
                                Designs are <span className="text-teal-300">transformed into high-resolution images</span>, ready for printing onto apparel.
                            </p>
                        </div>
                        <div className="flex mt-4 z-10">
                            {p1_tech_list}
                        </div>
                    </Project>
                </div>
            </div>
        </Observer>
    )
}
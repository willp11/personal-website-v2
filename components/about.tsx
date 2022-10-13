import { PlusCircleIcon } from "@heroicons/react/24/outline";
import CodingAnimation from "./codingAnimation";
import Observer from "./observer";

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

    // List of technologies
    const tech_list = technologies.map((tech)=>{
        return (
            <div className="flex items-center" key={tech}>
                <PlusCircleIcon className="stroke-teal-300 h-3 w-3 mr-2" />
                <li className="text-slate-300" style={{fontFamily: "Ubuntu-Mono"}}>{tech}</li>
            </div>
        )
    })

    return (
        <Observer>
            <div id="About" className="md:pr-16">
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
        </Observer>
    )
}
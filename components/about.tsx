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
                <p className="w-full max-w-[500px] text-slate-400 pt-8 pb-4">I am a software engineer from the UK with a passion for building web applications and learning about the latest advancements in the software engineering and tech industry.</p>
                <p className="w-full max-w-[500px] text-slate-400 pb-4">I recently graduated with a first-class honours in Computer Science from the Goldsmiths, University of London. During my degree I also worked as a smart contract engineer, writing Rust code, for blockchain projects in the Solana ecosystem. My focus now has shifted towards web development, in particular ReactJS/NextJS for frontend and Python Django for the backend.</p>
                <p className="w-full max-w-[500px] text-slate-400 pb-4">Previously, I have worked as a freelance developer, however I am now actively looking for a new full-time role based in the UK.</p>
                <p className="w-full max-w-[500px] text-slate-400">Here are some of the technologies I have been working with recently:</p>
                <ul className="w-full max-w-[500px] grid grid-cols-2">
                    {tech_list}
                </ul>
            </div>
            <CodingAnimation />
        </Observer>
    )
}
import { useEffect, useState } from "react";
import Observer from "./observer";
import Project from "./project";

const project1_technologies = [
    "Typescript",
    "React JS",
    "Next JS",
    "Tailwind",
    "Django",
    "Docker",
]

const project2_technologies = [
    "JavaScript (ES6+)",
    "React JS",
    "Tailwind",
    "Django",
    "Docker",
]

const project3_technologies = [
    "Typescript",
    "React JS",
    "Next JS",
    "Tailwind",
    "Django",
    "Docker",
]

const project4_technologies = [
    "JavaScript (ES6+)",
    "React Native",
    "CSS"
]

export default function Portfolio() {

    // check window size
    const [width, setWidth] = useState(0);
    function windowResized() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", windowResized); 
        return () => window.removeEventListener("resize", windowResized);
    }, []);

    // project technology lists
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

    const p3_tech_list = project3_technologies.map(tech=>{
        return (
            <p key={`p3-${tech}`} style={{fontFamily: "Ubuntu-Mono"}} className={width <= 768 ? "text-slate-300 pr-8 hover:text-teal-300" : "text-slate-300 pl-8 hover:text-teal-300"}>{tech}</p>
        )
    });

    const p4_tech_list = project4_technologies.map(tech=>{
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
                    <Project 
                        name="Print on Demand" 
                        side={width <= 768 ? "left" : "right"} 
                        index={0} 
                        beforeImgClass="before:bg-[url('/images/pod-app.jpg')]"
                        github="https://github.com/willp11/print-on-demand"
                        liveUrl="https://print-thailand.vercel.app"
                    >
                        <div className="w-full max-w-[500px] bg-[#112240] rounded px-8 py-4 z-10">
                            <p className={width <= 768 ? "text-slate-400 text-left" : "text-slate-400 text-right"}>
                                <span className="text-teal-300">Print on demand platform</span> built for a print shop/clothing manufacturer with built in <span className="text-teal-300">product customizer</span>. 
                                Users can upload images and add text to <span className="text-teal-300">create clothing designs</span>.
                                They can save their designs to use again and apply to all products found in the store.
                                Designs are <span className="text-teal-300">transformed into high-resolution images</span>, ready for printing onto apparel.
                                Built using a stack of <span className="text-teal-300">React JS, Next JS, Tailwind, Django, and Docker</span>.
                            </p>
                        </div>
                        <div className="flex flex-wrap mt-4 z-10">
                            {p1_tech_list}
                        </div>
                    </Project>
                </div>

                <div className="w-full flex flex-col items-start overflow-hidden">
                    <Project 
                        name="Parent-Teacher Communication" 
                        side="left" 
                        index={1} 
                        beforeImgClass="before:bg-[url('/images/parent-teacher-app.png')]"
                        github="https://github.com/willp11/Teacher-Parent-Communication-App"
                        liveUrl="https://teacher-parent-communication-app.vercel.app"
                    >
                        <div className="w-full max-w-[500px] bg-[#112240] rounded px-8 py-4 z-10">
                            <p className="text-slate-400 text-left">
                                <span className="text-teal-300">Web app</span> that enables teachers to manage their classroom and communicate with parents. 
                                Teachers can create <span className="text-teal-300">class stories, announcements and events</span> to keep parents informed about what is happening inside the classroom.
                                The app contains <span className="text-teal-300">communication tools</span> such as <span className="text-teal-300">real-time messaging</span> built using WebSockets, and <span className="text-teal-300">video calls</span> built using the WebRTC protocol.
                            </p>
                        </div>
                        <div className="flex flex-wrap mt-4 z-10">
                            {p2_tech_list}
                        </div>
                    </Project>
                </div>

                <div className={width <= 768 ? "w-full flex flex-col items-start" : "w-full flex flex-col items-end"}>
                    <Project 
                        name="Jewelry E-commerce Store" 
                        side={width <= 768 ? "left" : "right"} 
                        index={2} 
                        beforeImgClass="before:bg-[url('/images/ecommerce-app-1.png')]"
                        github="https://github.com/willp11/nextjs-ts-ecommerce"
                        liveUrl="https://nextjs-ts-ecommerce.vercel.app"
                    >
                        <div className="w-full max-w-[500px] bg-[#112240] rounded px-8 py-4 z-10">
                            <p className={width <= 768 ? "text-slate-400 text-left" : "text-slate-400 text-right"}>
                                <span className="text-teal-300">E-commerce</span> website for jewelry store integrated with <span className="text-teal-300">Stripe payment processor</span>. 
                                The frontend uses NextJS Static Site Generation to ensure <span className="text-teal-300">fast loading times</span>.
                                The site receives a <span className="text-teal-300">perfect accessibility score</span> on Google Lighthouse.
                                The backend built with Django enables the store owner to <span className="text-teal-300">manage product information with Django Admin</span>.
                            </p>
                        </div>
                        <div className="flex flex-wrap mt-4 z-10">
                            {p3_tech_list}
                        </div>
                    </Project>
                </div>

                <div className="w-full flex flex-col items-start overflow-hidden">
                    <Project 
                        name="Crypto Portfolio" 
                        side="left" 
                        index={3} 
                        beforeImgClass="before:bg-[url('/images/crypto-portfolio-app-wide-1.PNG')]"
                        github="https://github.com/willp11/crypto-tracker-app"
                        liveUrl="https://snack.expo.dev/@willp111/portfolio-app"
                    >
                        <div className="w-full max-w-[500px] bg-[#112240] rounded px-8 py-4 z-10">
                            <p className="text-slate-400 text-left">
                                Cryptocurrency <span className="text-teal-300">portfolio tracker</span> mobile app built with <span className="text-teal-300">React Native</span>. 
                                Integrated with <span className="text-teal-300">CoinGecko API</span> to retrieve coin information and price data.
                                Users can <span className="text-teal-300">add coins to their portfolio</span> and track the value of their portfolio and their <span className="text-teal-300">profit/loss</span> in real-time.
                            </p>
                        </div>
                        <div className="flex flex-wrap mt-4 z-10">
                            {p4_tech_list}
                        </div>
                    </Project>
                </div>
            </div>
        </Observer>
    )
}
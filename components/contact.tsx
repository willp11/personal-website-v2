import Observer from "./observer";
import TwitterLogo from "./logos/twitterLogo";
import GithubLogo from "./logos/githubLogo";
import LinkedinLogo from "./logos/linkedinLogo";

export default function Contact() {
    return (
        <Observer>
            <div id="Contact" className="w-full mb-16">
                <h2 className="mb-8">
                    <span className="text-2xl text-teal-300" style={{fontFamily: 'Ubuntu-Mono'}}>03. </span>
                    <span 
                        className="text-3xl font-bold text-slate-300 after:h-[1px] 
                            after:w-[100px] xs:after:w-[200px] sm:after:w-[300px]
                            after:inline after:absolute after:mt-5 after:ml-5 after:bg-slate-600"
                    >
                        Contact</span>
                </h2>
                <div className="w-full flex flex-col items-center justify-center">
                    <p className="text-teal-300 text-xl" style={{fontFamily: 'Ubuntu-Mono'}}>What's next?</p>
                    <h2 className="text-slate-300 text-5xl md:text-6xl font-bold">Get in Touch</h2>
                    <p className="w-full max-w-[500px] text-lg text-slate-300 mt-4">I'm always looking for new opportunities, my inbox is always open. For any enquiries feel free to send me an e-mail, find me on Twitter or LinkedIn!</p>
                    <a href="mailto: will_page_dev@proton.me" target="_blank" rel="noreferrer">
                        <div
                            style={{fontFamily: "Ubuntu-Mono"}}
                            className="w-32 text-center text-teal-300 border border-teal-300 px-4 py-2 mt-4 rounded-md hover:bg-slate-800 transition duration-500 ease-in-out cursor-pointer"
                        >
                            Send Email
                        </div>
                    </a>
                </div>
                <div className="flex justify-center items-center mt-8">
                    <a href="https://twitter.com/will_page_dev" target="_blank" rel="noreferrer"><TwitterLogo size="medium" /></a>
                    <span className="mx-8"><a href="https://github.com/willp11" target="_blank" rel="noreferrer"><GithubLogo size="medium" /></a></span>
                    <a href="https://www.linkedin.com/in/william-page-80a063260" target="_blank" rel="noreferrer"><LinkedinLogo size="medium" /></a>
                </div>
            </div>
        </Observer>
    );
}
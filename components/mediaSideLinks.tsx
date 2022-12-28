import GithubLogo from "./logos/githubLogo";
import TwitterLogo from "./logos/twitterLogo";
import LinkedinLogo from "./logos/linkedinLogo";
import {useState, useEffect} from 'react';

export default function MediaSideLinks() {

    const [active, setActive] = useState(false);

    useEffect(()=>{
        let timeout = 2000;
        setTimeout(()=>{
            setActive(true);
        }, timeout)
    }, [])

    let className = "opacity-0 -translate-y-[20px] transition ease-in-out duration-500";
    if (active) className = "opacity-1 translate-y-0 transition ease-in-out duration-500 text-xl max-w-[500px] text-teal-300 hidden xl:flex flex-col items-center justify-center fixed bottom-0 left-8";

    return (
        <div className={className}>
            <a href="https://twitter.com/will_page_dev" target="_blank"><TwitterLogo size="medium" /></a>
            <a href="https://github.com/willp11"><span className="my-6 xl:my-8"><GithubLogo size="medium" /></span></a>
            <a href="https://www.linkedin.com/in/william-page-80a063260"><span className="mb-6 xl:mb-8"><LinkedinLogo size="medium" /></span></a>
            <div className="w-[1px] h-[70px] xl:h-[100px] bg-slate-500"></div>
        </div>
    )
}
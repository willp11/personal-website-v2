import GithubLogo from "./logos/githubLogo";
import TwitterLogo from "./logos/twitterLogo";
import LinkedinLogo from "./logos/linkedinLogo";

export default function MediaSideLinks() {
    return (
        <div className="hidden sm:fixed sm:bottom-0 sm:left-8 sm:flex sm:flex-col sm:items-center sm:justify-center">
            <TwitterLogo size="medium" />
            <span className="sm:my-6 xl:my-8"><GithubLogo size="medium" /></span>
            <span className="sm:mb-6 xl:mb-8"><LinkedinLogo size="medium" /></span>
            <div className="w-[1px] h-[70px] xl:h-[100px] bg-slate-500"></div>
        </div>
    )
}
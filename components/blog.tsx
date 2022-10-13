import Observer from "./observer";
import BlogArticle from "./blogArticle";

export default function Blog() {
    return (
        <Observer>
            <div className="w-full pb-8">
                <h2>
                    <span className="text-2xl text-teal-300" style={{fontFamily: 'Ubuntu-Mono'}}>04. </span>
                    <span 
                        className="text-3xl font-bold text-slate-300 after:h-[1px] 
                            after:w-[100px] xs:after:w-[200px] sm:after:w-[300px]
                            after:inline after:absolute after:mt-5 after:ml-5 after:bg-slate-600"
                    >
                        Blog</span>
                </h2>
                <BlogArticle 
                    date="01/01/22" 
                    title="Introduction to Django" 
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..." 
                />
                <BlogArticle 
                    date="01/01/22" 
                    title="Introduction to Django" 
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..." 
                />
                <BlogArticle 
                    date="01/01/22" 
                    title="Introduction to Django" 
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..." 
                />
            </div>
        </Observer>
    )
}
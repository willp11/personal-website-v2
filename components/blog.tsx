import Observer from "./observer";
import BlogArticle from "./blogArticle";

interface IBlogArticle {
    date: string;
    title: string;
    content: string;
    url: string;
}

const blog_data: IBlogArticle[] = [
    {
        date: "21/08/22",
        title: "Optimizing React Apps with React.memo, useMemo and useCallback",
        content: "When you're starting out as a new developer, you just want to get things to work without any bugs, however as your projects grow and become more complex you need to start thinking about optimizations to ensure a smooth experience for users...",
        url: "https://dev.to/willp11/optimizing-react-apps-with-reactmemo-usememo-and-usecallback-12ig"
    },
    {
        date: "10/08/22",
        title: "NextJS Introduction",
        content: "Next JS is a React framework that provides the building blocks to create fast web applications using the React JS JavaScript library. The pre-requisites to building a Next.js application are knowledge of JavaScript and React JS. A beginner is advised to first build an application with JavaScript, then build on that knowledge by re-writing it as a React JS project, then finally a Next.js project...",
        url: "https://dev.to/willp11/nextjs-introduction-21l5"
    },
    {
        date: "03/06/22",
        title: "Django Part 3 - User authentication with dj-rest-auth and allauth",
        content: "For this part of the tutorial, we will be using the dj-rest-auth and allauth packages to help us create API endpoints for account registration, login and email verification. There are various different ways to implement user authentication with Django, will be using token authentication...",
        url: "https://dev.to/willp11/django-part-3-user-authentication-with-dj-rest-auth-and-allauth-4dih"
    },
    {
        date: "02/06/22",
        title: "Django Part 2 - Creating a custom User model",
        content: "We are going to create a custom user class that will be used when users register an account and login. It is much easier to do this before running the initial database migrations, we can then easily make adjustments to the model later...",
        url: "https://dev.to/willp11/django-part-2-creating-a-custom-user-model-3a8a"
    },
    {
        date: "01/06/22",
        title: "Django Part 1- Creating a new project",
        content: "In this post I will be showing how you can create a new Django project. This tutorial assumes that you already have Python and pip installed. I am using a Windows machine, it uses the command py to run Python, however on Linux it will be different and most likely you will need to replace py with python3...",
        url: "https://dev.to/willp11/django-part-1-creating-a-new-project-1mk1"
    }
]

export default function Blog() {
    return (
        <Observer>
            <div id="Blog" className="w-full py-8">
                <h2>
                    <span className="text-2xl text-teal-300" style={{fontFamily: 'Ubuntu-Mono'}}>04. </span>
                    <span 
                        className="text-3xl font-bold text-slate-300 after:h-[1px] 
                            after:w-[100px] xs:after:w-[200px] sm:after:w-[300px]
                            after:inline after:absolute after:mt-5 after:ml-5 after:bg-slate-600"
                    >
                        Blog</span>
                </h2>
                {
                    blog_data.map((article, index)=>{
                        return (
                            <BlogArticle 
                                key={`blog-article-${index}`}
                                date={article.date} 
                                title={article.title} 
                                content={article.content}
                                url={article.url}
                            />
                        )
                    })
                }
            </div>
        </Observer>
    )
}
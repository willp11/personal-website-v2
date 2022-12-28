export default function BlogArticle({date, title, content, url}: {date: string, title: string, content: string, url: string}) {
    return (
        <article className="w-full flex flex-col items-start justify-start border-b border-slate-600 pb-4 mt-8">
            <p className="text-teal-300 text-xl" style={{fontFamily: 'Ubuntu-Mono'}}>{date}</p>
            <h2 className="text-slate-300 text-2xl md:text-3xl font-bold">{title}</h2>
            <p className="w-full max-w-[500px] text-base text-slate-300 mt-2">{content}</p>
            <a href={url} target="_blank" rel="noreferrer">
                <div
                    style={{fontFamily: "Ubuntu-Mono"}}
                    className="w-40 text-center text-teal-300 border border-teal-300 px-4 py-2 mt-4 rounded-md hover:bg-slate-800 transition duration-500 ease-in-out cursor-pointer"
                >
                    Read Article
                </div>
            </a> 
        </article>
    )
}
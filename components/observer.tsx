import React, {useRef, useState, useEffect} from 'react';

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
}

export default function Observer({children}: {children: React.ReactNode}) {
    // when section intersects the window, transitions in
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries: any) => {
        const [ entry ] = entries;
        if (entry.isIntersecting) setIsVisible(true);
    }

    useEffect(()=>{
        const observer = new IntersectionObserver(callbackFunction, options);
        if (containerRef.current) observer.observe(containerRef.current);
        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        }
    }, [])

    let className="w-full h-full opacity-0 -translate-x-full transition in-ease-out duration-1000";
    if (isVisible) className="w-full h-full opacity-100 -translate-x-0 transition in-ease-out duration-1000 flex flex-col md:flex-row pb-8";

    return (
        <section ref={containerRef} className="w-full min-h-[500px] max-w-[1000px] mx-auto">
            <div className={className}>
                {children}
            </div>
        </section>
    )
}
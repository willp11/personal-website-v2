import React, {useRef, useState, useEffect} from 'react';

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
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
        const observedNode = containerRef.current;
        if (observedNode) observer.observe(observedNode);
        return () => {
            if (observedNode) observer.unobserve(observedNode);
        }
    }, [])

    let className="w-full h-full opacity-0 -translate-x-full transition in-ease-out duration-1000";
    if (isVisible) className="w-full h-full opacity-100 -translate-x-0 transition in-ease-out duration-1000 flex flex-col md:flex-row";

    return (
        <section ref={containerRef} className="w-full min-h-[400px] max-w-[1000px] mx-auto">
            <div className={className}>
                {children}
            </div>
        </section>
    )
}
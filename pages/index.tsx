import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/hero';
import About from '../components/about';
import {useRef, useState, useEffect} from 'react';

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
}

const Home: NextPage = () => {

    // const containerRef = useRef(null);
    // const [isVisible, setIsVisible] = useState(false);

    // const callbackFunction = (entries: any) => {
    //     const [ entry ] = entries;
    //     if (entry.isIntersecting) setIsVisible(true);
    //     console.log(entry)
    // }

    // useEffect(()=>{
    //     const observer = new IntersectionObserver(callbackFunction, options);
    //     if (containerRef.current) observer.observe(containerRef.current);
    //     return () => {
    //         if (containerRef.current) observer.unobserve(containerRef.current);
    //     }
    // }, [containerRef.current])

    // let className="w-full h-full -translate-x-full opacity-0 transition in-ease-out duration-500";
    // if (isVisible) className="w-full h-full -translate-x-0 opacity-100 transition in-ease-out duration-500"

    return (
        <div>
            <Head>
                <title>William Page</title>
            </Head>
            <div>
                <Hero />
                {/* <div ref={containerRef} className={className}> */}
                    <About />
                {/* </div> */}
            </div>
        </div>
    )
}

export default Home

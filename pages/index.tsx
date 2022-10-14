import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/hero';
import About from '../components/about';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';
import Blog from '../components/blog';
import ProjectImages from '../components/projectImages';

const Home: NextPage = () => {

    return (
        <div>
            <Head>
                <title>William Page</title>
            </Head>
            <div>
                <Hero />
                <About />
                <Portfolio/>
                <Contact />
                <Blog />
                <ProjectImages />
            </div>
        </div>
    )
}

export default Home

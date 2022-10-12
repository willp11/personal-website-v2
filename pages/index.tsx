import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/hero';
import About from '../components/about';
import Portfolio from '../components/portfolio';

const Home: NextPage = () => {

    return (
        <div>
            <Head>
                <title>William Page</title>
            </Head>
            <div>
                <Hero />
                <About />
                <Portfolio />
            </div>
        </div>
    )
}

export default Home

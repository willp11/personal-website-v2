import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/hero';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>William Page</title>
            </Head>
            <div>
                <Hero />
            </div>
        </div>
    )
}

export default Home

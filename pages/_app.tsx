import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { ProjectImagesProvider } from '../hooks/useImagesModal';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ProjectImagesProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ProjectImagesProvider>
    )
}

export default MyApp

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
            <meta
                name="description"
                content="William Page portfolio website."
            />
            <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
            <link rel="apple-touch-icon" href="/images/favicon/apple-touch-icon.png" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}
import Head from 'next/head';

export default function BlankBase(props) {
    return (
        <div>
            <Head>
                <title>{props.page.title}</title>
                <meta name="description" content="Stackbit Components Library" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            </Head>
            <h2>Blank Base</h2>
            {props.children}
        </div>
    );
}

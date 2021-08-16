import Head from 'next/head';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function DefaultBase(props) {
    return (
        <div>
            <Head>
                <title>{props.page.title}</title>
                <meta name="description" content="Stackbit Components Library" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            </Head>
            <NavBar {...props.siteConfig} />
            <h2>Default Base</h2>
            {props.children}
            <Footer {...props.siteConfig} />
        </div>
    );
}

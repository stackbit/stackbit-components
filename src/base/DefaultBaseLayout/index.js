import React from 'react';
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function DefaultBaseLayout(props) {
    const { page, site } = props;
    const { title } = page;console.log(site)
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Stackbit Components Library" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            </Head>
            <NavBar {...site.navBar} />
            {props.children}
            <Footer {...site.footer} />
        </div>
    );
}

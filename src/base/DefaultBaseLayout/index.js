import React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function DefaultBaseLayout(props) {
    const { page, site } = props;
    const siteMeta = site?.__metadata || {};
    const pageMeta = page?.__metadata || {};
    return (
        <div className={classNames('page', pageMeta.pageCssClasses)} data-sb-object-id={pageMeta.id}>
            <div
                className={classNames('base default-base-layout', {
                    [`${site.backgroundColor}`]: site.backgroundColor,
                    'bg-white': !!site.backgroundColor
                })}
            >
                <Head>
                    <title>{page.title}</title>
                    <meta name="description" content="Stackbit Components Library" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet" />
                </Head>
                <NavBar {...site.navBar} annotationPrefix={siteMeta.id} />
                {props.children}
                <Footer {...site.footer} annotationPrefix={siteMeta.id} />
            </div>
        </div>
    );
}

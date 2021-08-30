import React from 'react';
import Head from 'next/head';

export default function BlankBaseLayout(props) {
    const { page, site } = props;
    const siteMeta = site?.__metadata || {};
    const pageMeta = page?.__metadata || {};
    return (
        <div className={site.backgroundColor || 'bg-white'} data-sb-object-id={pageMeta.id}>
            <Head>
                <title>{page.title}</title>
                <meta name="description" content="Stackbit Components Library" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            </Head>
            {props.children}
        </div>
    );
}

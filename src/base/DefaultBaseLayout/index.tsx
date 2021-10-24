import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';

import { getComponent } from '../../components-registry';

export default function DefaultBaseLayout(props) {
    const { page, site } = props;
    const siteMeta = site?.__metadata || {};
    const pageMeta = page?.__metadata || {};
    const Header = getComponent('Header');
    const Footer = getComponent('Footer');
    return (
        <div className={classNames('page', pageMeta.pageCssClasses)} data-sb-object-id={pageMeta.id}>
            <div className="base default-base-layout">
                <Head>
                    <title>{page.title}</title>
                    <meta name="description" content="Stackbit Components Library" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                </Head>
                <Header {...site.header} annotationPrefix={siteMeta.id} />
                {props.children}
                <Footer {...site.footer} annotationPrefix={siteMeta.id} />
            </div>
        </div>
    );
}

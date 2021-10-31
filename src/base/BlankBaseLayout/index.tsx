import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';

export default function BlankBaseLayout(props) {
    const { page, site } = props;
    const pageMeta = page?.__metadata || {};
    const domain = (site?.domain || '').replace(/\/+$/g, '');
    const seo = page?.seo || {};
    const seoTitle = seo.title ? seo.title : page.title;
    const seoDescription = seo.description || '';
    const seoRobots = (seo.robots || []).join(',');
    const seoExtra = (seo.extra || []).map((meta, index) => {
        const keyName = meta.keyName || 'name';
        const name = meta.name;
        if (!name) {
            return null;
        }
        const nameAttr = { [keyName]: name };
        const relativeUrl = meta.relativeUrl || false;
        let value = meta.value;
        if (!value) {
            return null;
        }
        if (relativeUrl) {
            if (!domain) {
                return null;
            }
            value = domain + '/' + value.replace(/^\/+/g, '');
        }
        return <meta key={index} {...nameAttr} content={value} />;
    });
    return (
        <div className={classNames('page', pageMeta.pageCssClasses)} data-sb-object-id={pageMeta.id}>
            <Head>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                {seoRobots && <meta name="robots" content={seoRobots} />}
                {seoExtra}
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            </Head>
            {props.children}
        </div>
    );
}

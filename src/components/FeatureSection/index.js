import React from 'react';
import classNames from 'classnames';
import VariantA from './variants/VariantA';
import VariantB from './variants/VariantB';

export default function FeatureSection(props) {
    const { variant } = props;
    const fields = {
        width: 'wide',
        heading: 'Default Heading',
        subHeading: 'Default Subheading',
        image: 'https://assets.coinbase.com/assets/coinbase-app.3b0bfd4cb6b7a7614c1e18472187f6b9.webp',
        features: [
            {
                icon: 'https://img.icons8.com/color-glass/96/000000/bar-chart.png',
                heading: 'Manage your portfolio',
                text: 'Buy and sell popular digital currencies, keep track of them in the one place.'
            },
            {
                icon: 'https://img.icons8.com/color-glass/96/000000/today.png',
                heading: 'Recurring buys',
                text: 'Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.'
            },
            {
                icon: 'https://img.icons8.com/color-glass/96/000000/touchscreen-smartphone.png',
                heading: 'Mobile apps',
                text: 'Stay on top of the markets with the Coinbase app for Android or iOS.'
            }
        ],
        ...props
    };

    let Variant = VariantA;
    switch (variant) {
        case 'variant-a':
            Variant = VariantA;
            break;
        case 'variant-b':
            Variant = VariantB;
    }

    return (
        <div
            id={props.elementId}
            className={classNames('component', 'component-section', 'component-feature-section', 'py-16 lg:py-20', {
                'mx-auto': fields.width !== 'full',
                'max-w-screen-xl': fields.width === 'wide',
                'max-w-screen-lg': fields.width === 'narrow'
            })}
        >
            <Variant {...fields} />
        </div>
    );
}

import React from 'react';
import { getBaseLayoutComponent } from '../../utils/base-layout';
import HeroSection from '../../components/HeroSection';

export default function PostLayout(props) {
  const { page, site } = props;
  const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);

  const fields = {
    title: page.title,
    date: page.date,
    text: page.excerpt,
    feature: {
      type: 'ImageBlock',
      imageUrl: page.thumbImageUrl,
      imageAltText: page.thumbImageAltText
    }
  };

  return (
    <>
      <BaseLayout page={page} site={site}>
        {page.title && <h1 className="sr-only">{page.title}</h1>}
        <HeroSection {...fields} />
      </BaseLayout>
    </>
  );
}

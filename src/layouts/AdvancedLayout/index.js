import React from 'react';
import { getBaseLayoutComponent } from '../../utils/base-layout';
import { getDynamicComponent } from '../../components-registry';

export default function AdvancedLayout(props) {
  const { page, siteConfig } = props;
  const BaseLayout = getBaseLayoutComponent(page.baseLayout, siteConfig.baseLayout);

  return (
    <>
      <BaseLayout page={page} siteConfig={siteConfig}>
        {page.title && <h1 className="sr-only">{page.title}</h1>}
        {page.sections.map((section, index) => {
          const sectionType = section.type;
          const Component = getDynamicComponent(sectionType);
          if (!Component) {
            throw new Error(`no component matching the page section's type: ${sectionType}`);
          }
          return <Component key={index} {...section} />;
        })}
      </BaseLayout>
    </>
  );
}

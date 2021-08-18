import React from 'react';
import { getDynamicComponent } from '../../components-registry';
import { getBaseLayoutComponent } from '../../utils/base-layout';

export default function AdvancedLayout(props) {
  const { page, site } = props;
  const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);

  return (
    <>
      <BaseLayout page={page} site={site}>
        {page.sections.map((section, index) => {
          const Component = getDynamicComponent(section.type);
          if (!Component) {
            throw new Error(`no component matching the page section's type: ${section.type}`);
          }
          return <Component key={index} {...section} />;
        })}
      </BaseLayout>
    </>
  );
}

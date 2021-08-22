import React from 'react';
import Markdown from 'markdown-to-jsx';
import { getBaseLayoutComponent } from '../../utils/base-layout';
import { getDynamicComponent } from '../../components-registry';

export default function PostLayout(props) {
  const { page, site } = props;
  const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
  const topSections = page.topSections || [];
  const bottomSections = page.bottomSections || [];

  return (
    <>
      <BaseLayout page={page} site={site}>
        {topSections.length > 0 && (
          <div data-sb-field-path="topSections">
            {topSections.map((section, index) => {
              const Component = getDynamicComponent(section.type);
              if (!Component) {
                throw new Error(`no component matching the page section's type: ${section.type}`);
              }
              return <Component key={index} {...section} annotationPrefix={`topSections.${index}`} />;
            })}
          </div>
        )}
        <article
          className="py-16 lg:py-20 mx-auto max-w-screen-lg"
          data-sb-field-path=""
        >
          <div className="mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-8">
            {page.title && <h1 className="text-4xl tracking-tight sm:text-5xl mb-6 max-w-3xl mx-auto">{page.title}</h1>}
            {page.thumbImageUrl && (
              <div className="h-0 w-full pt-1/2 mb-6 relative">
                  <img src={page.thumbImageUrl} alt={page.thumbImageAltText || ''} className="absolute left-0 top-0 h-full w-full object-cover" />
              </div>
            )}
            {page.markdown_content && <Markdown options={{ forceBlock: true }} className="max-w-3xl mx-auto md:text-lg">{page.markdown_content}</Markdown>}
          </div>
        </article>
        {bottomSections.length > 0 && (
          <div data-sb-field-path="bottomSections">
            {bottomSections.map((section, index) => {
              const Component = getDynamicComponent(section.type);
              if (!Component) {
                throw new Error(`no component matching the page section's type: ${section.type}`);
              }
              return <Component key={index} {...section} annotationPrefix={`bottomSections.${index}`} />;
            })}
          </div>
        )}
      </BaseLayout>
    </>
  );
}

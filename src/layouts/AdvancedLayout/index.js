import { getDynamicComponent } from '../../components-registry';
import * as base from '../../base/index'

export default function AdvancedLayout(props) {
  const { page, siteConfig } = props;

  let BaseLayout = base.DefaultBaseLayout
  if (page.baseLayout) {
    BaseLayout = base[page.baseLayout];
  } else if (siteConfig.baseLayout) {
    BaseLayout =  base[siteConfig.baseLayout];
  }
  if (!BaseLayout) {
    throw new Error(`no BaseLayout: ${page.baseLayout} or ${siteConfig.baseLayout}`);
  }
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

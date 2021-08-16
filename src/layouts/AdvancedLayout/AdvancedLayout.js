import { getDynamicComponent } from '../../components-registry';
import DefaultBase from '../../base/DefaultBase/DefaultBase'

export default function AdvancedLayout(props) {
    const { page, siteConfig } = props;

    let BaseLayout = DefaultBase
    if (page.baseLayout) {
      BaseLayout =  getDynamicComponent(page.baseLayout);
    } else if (siteConfig.baseLayout) {
      BaseLayout =  getDynamicComponent(siteConfig.baseLayout);
    }
    if (!BaseLayout) {
      throw new Error(`no BaseLayout: ${page.baseLayout} or ${siteConfig.baseLayout}`);
  }
    console.log("BaseLayout", BaseLayout)

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

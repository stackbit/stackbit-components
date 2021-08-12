import BaseLayout from '../base-layout';
import { getDynamicComponent } from '../../components-registry';

export default function Advanced(props) {
    const siteConfig = props?.siteConfig ?? {};
    const page = props?.page ?? {};
    const sections = page?.sections ?? [];
    const urlPath = page?.__metadata?.urlPath ?? '';
    const pageUrl = '/' + urlPath.replace(/^\//, '');
    const pageTitle = page?.title;

    return (
        <BaseLayout page={page} siteConfig={siteConfig}>
            {pageTitle && <h1 className="sr-only">{pageTitle}</h1>}
            {sections.map((section, index) => {
                const sectionType = section?.type;
                if (!sectionType) {
                    throw new Error(`page section does not have the 'type' property, page: ${pageUrl}`);
                }
                const Component = getDynamicComponent(sectionType);
                if (!Component) {
                    throw new Error(`no component matching the page section's type: ${sectionType}`);
                }
                return <Component key={index} {...section} />;
            })}
        </BaseLayout>
    );
}

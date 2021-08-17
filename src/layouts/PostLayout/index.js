import { getDynamicComponent } from '../../components-registry';
import { getBaseLayoutComponent } from '../../utils/base-layout'
import HeroSection from '../../components/HeroSection'

export default function PostLayout(props) {
  const { page, siteConfig } = props;
  const BaseLayout = getBaseLayoutComponent(page.baseLayout, siteConfig.baseLayout)

  const fields = {
    title: page.title,
    date: page.date,
    text: page.excerpt,
    feature: {
      type: "ImageBlock",
      imageUrl: thumbImageUrl,
      imageAltText: thumbImageAltText
    }
  }

  return (
    <>
      <BaseLayout page={page} siteConfig={siteConfig}>
        {page.title && <h1 className="sr-only">{page.title}</h1>}
        <HeroSection {...fields} />
      </BaseLayout>
    </>
  );
}

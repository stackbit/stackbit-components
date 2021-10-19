import * as base from '../base/';

export function getBaseLayoutComponent(pageBaseLayout, siteConfigBaseLayout) {
    let BaseLayout = base.DefaultBaseLayout;
    if (pageBaseLayout) {
        BaseLayout = base[pageBaseLayout];
    } else if (siteConfigBaseLayout) {
        BaseLayout = base[siteConfigBaseLayout];
    }
    if (!BaseLayout) {
        throw new Error(`no BaseLayout: ${pageBaseLayout} or ${siteConfigBaseLayout}`);
    }
    return BaseLayout;
}

import dynamic from 'next/dynamic';

export { default as Advanced } from './advanced';
export { default as BaseLayout } from './base-layout';

// dynamic maps from model name to dynamic import
export const dynamicLayouts = {
    advanced: dynamic(() => import('./advanced'))
}

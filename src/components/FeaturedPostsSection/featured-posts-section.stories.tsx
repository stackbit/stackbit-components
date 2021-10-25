import React from 'react';
import FeaturedPostsSection from './index';

export default {
    title: 'Components/FeaturedPostsSection',
    component: FeaturedPostsSection,
    argTypes: {
        type: { table: { disable: true } },
        elementId: {
            defaultValue: ''
        },
        variant: {
            options: ['variant-a', 'variant-b', 'variant-c'],
            defaultValue: 'variant-a',
            control: { type: 'select' }
        },
        colors: {
            options: ['colors-a', 'colors-b', 'colors-c', 'colors-d', 'colors-e', 'colors-f', 'colors-g', 'colors-h', 'colors-i'],
            defaultValue: 'colors-a',
            control: { type: 'select' }
        },
        backgroundWidth: {
            options: ['full', 'inset'],
            defaultValue: 'full',
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <FeaturedPostsSection {...args} />;

const args = {
    type: 'FeaturedPostsSection',
    elementId: '',
    variant: 'variant-a',
    colors: 'colors-f',
    backgroundWidth: 'full',
    title: 'Latest from the Blog',
    subtitle: 'This is Subtitle',
    actions: [
        {
            type: 'Button',
            url: '#',
            label: 'View More',
            style: 'primary'
        }
    ],
    posts: [
        {
            __metadata: {},
            title: 'Post Title Three',
            date: '2021-07-03',
            excerpt: 'Primum divisit ineleganter; Hoc unum Aristo tenuit: praeter vitia atque virtutes negavit rem esse ullam aut fugiendam.',
            featuredImage: {
                type: 'ImageBlock',
                url: '/images/post-3.jpeg',
                altText: 'Post Image'
            },
            markdown_content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ea mala virtuti magnitudine obruebantur. Duo Reges: constructio interrete. An hoc usque quaque, aliter in vita? Gracchum patrem non beatiorem fuisse quam fillum, cum alter stabilire rem publicam studuerit, alter evertere. Quo plebiscito decreta a senatu est consuli quaestio Cn. Illud non continuo, ut aeque incontentae. Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti videre, nihil tranquilli potest. Itaque hoc frequenter dici solet a vobis, non intellegere nos, quam dicat Epicurus voluptatem. Sin kakan malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret.\n\n## Sed Ille, UT Dixi, Vitiose\n\nUtrum igitur tibi litteram videor an totas paginas commovere? Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Ne in odium veniam, si amicum destitero tueri. Ne amores quidem sanctos a sapiente alienos esse arbitrantur. Quid ergo aliud intellegetur nisi uti ne quae pars naturae neglegatur? Quis istud, quaeso, nesciebat? Primum divisit ineleganter; Hoc unum Aristo tenuit: praeter vitia atque virtutes negavit rem esse ullam aut fugiendam aut expetendam. Et ille ridens: Video, inquit, quid agas; In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret.\n\n'
        },
        {
            __metadata: {},
            title: 'Post Title Two',
            date: '2021-07-01',
            excerpt: 'otius inflammat, ut coercendi magis quam dedocendi esse videantur.',
            featuredImage: {
                type: 'ImageBlock',
                url: '/images/post-2.jpeg',
                altText: 'Post Image'
            },
            markdown_content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ea mala virtuti magnitudine obruebantur. Duo Reges: constructio interrete. An hoc usque quaque, aliter in vita? Gracchum patrem non beatiorem fuisse quam fillum, cum alter stabilire rem publicam studuerit, alter evertere. Quo plebiscito decreta a senatu est consuli quaestio Cn. Illud non continuo, ut aeque incontentae. Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti videre, nihil tranquilli potest. Itaque hoc frequenter dici solet a vobis, non intellegere nos, quam dicat Epicurus voluptatem. Sin kakan malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret.\n\n## Sed Ille, UT Dixi, Vitiose\n\nUtrum igitur tibi litteram videor an totas paginas commovere? Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Ne in odium veniam, si amicum destitero tueri. Ne amores quidem sanctos a sapiente alienos esse arbitrantur. Quid ergo aliud intellegetur nisi uti ne quae pars naturae neglegatur? Quis istud, quaeso, nesciebat? Primum divisit ineleganter; Hoc unum Aristo tenuit: praeter vitia atque virtutes negavit rem esse ullam aut fugiendam aut expetendam. Et ille ridens: Video, inquit, quid agas; In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret.\n\n'
        },
        {
            __metadata: {},
            title: 'Post Title One',
            date: '2021-06-28',
            excerpt: 'Quo plebiscito decreta a senatu est consuli quaestio Cn. Illud non continuo, ut aeque incontentae. Atqui pugnantibus et contrariis.',
            featuredImage: {
                type: 'ImageBlock',
                url: '/images/post-1.jpeg',
                altText: 'Post Image'
            },
            markdown_content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ea mala virtuti magnitudine obruebantur. Duo Reges: constructio interrete. An hoc usque quaque, aliter in vita? Gracchum patrem non beatiorem fuisse quam fillum, cum alter stabilire rem publicam studuerit, alter evertere. Quo plebiscito decreta a senatu est consuli quaestio Cn. Illud non continuo, ut aeque incontentae. Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti videre, nihil tranquilli potest. Itaque hoc frequenter dici solet a vobis, non intellegere nos, quam dicat Epicurus voluptatem. Sin kakan malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret.\n\n## Sed Ille, UT Dixi, Vitiose\n\nUtrum igitur tibi litteram videor an totas paginas commovere? Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Ne in odium veniam, si amicum destitero tueri. Ne amores quidem sanctos a sapiente alienos esse arbitrantur. Quid ergo aliud intellegetur nisi uti ne quae pars naturae neglegatur? Quis istud, quaeso, nesciebat? Primum divisit ineleganter; Hoc unum Aristo tenuit: praeter vitia atque virtutes negavit rem esse ullam aut fugiendam aut expetendam. Et ille ridens: Video, inquit, quid agas; In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret.\n\n'
        }
    ],
    styles: {
        self: {
            height: 'auto',
            width: 'wide',
            margin: ['mt-0', 'mb-0'],
            padding: ['pt-12', 'pb-12'],
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            fontWeight: 700,
            fontStyle: 'normal',
            textAlign: 'center'
        },
        subtitle: {
            fontWeight: 400,
            fontStyle: 'normal',
            textAlign: 'center'
        },
        actions: {
            justifyContent: 'center'
        }
    }
};

export const Primary = Template.bind({});
Primary.storyName = 'Featured Posts, Three Column Grid';
Primary.args = args;

export const FeaturedPostsTwoCol = Template.bind({});
FeaturedPostsTwoCol.storyName = 'Featured Posts, Two Column Grid';
FeaturedPostsTwoCol.args = {
    ...args,
    variant: 'variant-b',
    styles: {
        self: {
            height: 'auto',
            width: 'wide',
            margin: ['mt-0', 'mb-0'],
            padding: ['pt-12', 'pb-12'],
            alignItems: 'center',
            justifyContent: 'center'
        },
        title: {
            fontWeight: 700,
            fontStyle: 'normal',
            textAlign: 'left'
        },
        subtitle: {
            fontWeight: 400,
            fontStyle: 'normal',
            textAlign: 'left'
        },
        actions: {
            justifyContent: 'flex-start'
        }
    }
};

export const FeaturedPostsList = Template.bind({});
FeaturedPostsList.storyName = 'Featured Posts List';
FeaturedPostsList.args = {
    ...args,
    variant: 'variant-c'
};

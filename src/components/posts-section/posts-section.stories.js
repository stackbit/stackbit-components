import React from 'react';
import PostsSection from './index';

export default {
    title: 'Components/Posts Section',
    component: PostsSection,
    argTypes: {
        variant: {
            options: ['variant-a', 'variant-b'],
            control: { type: 'select' }
        },
        style: {
            options: ['style-a', 'style-b', 'style-c', 'style-d', 'style-e'],
            control: { type: 'select' }
        },
        width: {
            options: ['narrow', 'wide', 'full'],
            control: { type: 'select' }
        },
        height: {
            options: ['auto', 'viewport'],
            control: { type: 'select' }
        },
        alignHoriz: {
            options: ['left', 'center'],
            control: { type: 'select' }
        }
    }
};

const Template = (args) => <PostsSection {...args} />;

const args = {
    type: 'section_posts',
    variant: 'variant-a',
    style: 'style-d',
    width: 'wide',
    height: 'auto',
    alignHoriz: 'center',
    title: 'Latest from **the Blog**',
    badge: '',
    subtitle: '',
    posts: [
        {
            title: 'Sustainability at it’s purest',
            date: '2021-07-03',
            excerpt: 'We’re local, seasonal fisherman, supporting fishing restrictions. We fish what the sea has to offer, nothing more, and no cheating.',
            thumbImageUrl: '/images/fisherman.jpg',
            thumbImageAlt: 'Fisherman',
            url: '#',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ea mala virtuti magnitudine obruebantur. Duo Reges: constructio interrete. An hoc usque quaque, aliter in vita? Gracchum patrem non beatiorem fuisse quam fillum, cum alter stabilire rem publicam studuerit, alter evertere. Quo plebiscito decreta a senatu est consuli quaestio Cn. Illud non continuo, ut aeque incontentae. Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti videre, nihil tranquilli potest. Itaque hoc frequenter dici solet a vobis, non intellegere nos, quam dicat Epicurus voluptatem. Sin kakan malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret.\n\n## Sed Ille, UT Dixi, Vitiose\n\nUtrum igitur tibi litteram videor an totas paginas commovere? Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Ne in odium veniam, si amicum destitero tueri. Ne amores quidem sanctos a sapiente alienos esse arbitrantur. Quid ergo aliud intellegetur nisi uti ne quae pars naturae neglegatur? Quis istud, quaeso, nesciebat? Primum divisit ineleganter; Hoc unum Aristo tenuit: praeter vitia atque virtutes negavit rem esse ullam aut fugiendam aut expetendam. Et ille ridens: Video, inquit, quid agas; In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret.\n\n'
        },
        {
            title: 'As fresh as it gets',
            date: '2021-07-01',
            excerpt: 'Same day delivery, cleaned, on ice, ready to be eaten.',
            thumbImageUrl: '/images/mackerels.jpg',
            thumbImageAlt: 'Mackerels',
            url: '#',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ea mala virtuti magnitudine obruebantur. Duo Reges: constructio interrete. An hoc usque quaque, aliter in vita? Gracchum patrem non beatiorem fuisse quam fillum, cum alter stabilire rem publicam studuerit, alter evertere. Quo plebiscito decreta a senatu est consuli quaestio Cn. Illud non continuo, ut aeque incontentae. Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti videre, nihil tranquilli potest. Itaque hoc frequenter dici solet a vobis, non intellegere nos, quam dicat Epicurus voluptatem. Sin kakan malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret.\n\n## Sed Ille, UT Dixi, Vitiose\n\nUtrum igitur tibi litteram videor an totas paginas commovere? Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Ne in odium veniam, si amicum destitero tueri. Ne amores quidem sanctos a sapiente alienos esse arbitrantur. Quid ergo aliud intellegetur nisi uti ne quae pars naturae neglegatur? Quis istud, quaeso, nesciebat? Primum divisit ineleganter; Hoc unum Aristo tenuit: praeter vitia atque virtutes negavit rem esse ullam aut fugiendam aut expetendam. Et ille ridens: Video, inquit, quid agas; In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret.\n\n'
        },
        {
            title: 'Bi-weekly subscription',
            date: '2021-06-28',
            excerpt: 'This feature is the thing you were missing in your workflow, thank god we have it for you to use.',
            thumbImageUrl: '/images/fish-lemon.jpg',
            thumbImageAlt: 'Raw fish, spices, lemon',
            url: '#',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ea mala virtuti magnitudine obruebantur. Duo Reges: constructio interrete. An hoc usque quaque, aliter in vita? Gracchum patrem non beatiorem fuisse quam fillum, cum alter stabilire rem publicam studuerit, alter evertere. Quo plebiscito decreta a senatu est consuli quaestio Cn. Illud non continuo, ut aeque incontentae. Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti videre, nihil tranquilli potest. Itaque hoc frequenter dici solet a vobis, non intellegere nos, quam dicat Epicurus voluptatem. Sin kakan malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret.\n\n## Sed Ille, UT Dixi, Vitiose\n\nUtrum igitur tibi litteram videor an totas paginas commovere? Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Ne in odium veniam, si amicum destitero tueri. Ne amores quidem sanctos a sapiente alienos esse arbitrantur. Quid ergo aliud intellegetur nisi uti ne quae pars naturae neglegatur? Quis istud, quaeso, nesciebat? Primum divisit ineleganter; Hoc unum Aristo tenuit: praeter vitia atque virtutes negavit rem esse ullam aut fugiendam aut expetendam. Et ille ridens: Video, inquit, quid agas; In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret.\n\n'
        }
    ]
};

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.storyName = 'content under image';
Primary.args = { ...args, variant: 'variant-a', width: 'wide', height: 'auto', alignHoriz: 'center' };

export const VariantB = Template.bind({});
VariantB.storyName = 'content to the right of the image';
VariantB.args = { ...args, variant: 'variant-b', width: 'wide', height: 'auto', alignHoriz: 'left' };

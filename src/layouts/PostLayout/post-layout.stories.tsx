import * as React from 'react';

import * as NavBarStories from '../../components/NavBar/navbar.stories';
import * as FooterStories from '../../components/Footer/footer.stories';
import * as CtaSectionStories from '../../components/CtaSection/cta-section.stories';
import * as FeaturedPostsSectionStories from '../../components/FeaturedPostsSection/featured-posts-section.stories';
import PostLayout from './index';

export default {
    title: 'Layouts/PostLayout',
    component: PostLayout,
    parameters: {
        StackbitFrontmatter: {
            root: 'page'
        },
        StackbitModels: {
            root: 'page'
        }
    }
};

const Template = (args) => <PostLayout {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Layout';
Primary.args = {
    page: {
        __metadata: {},
        title: 'Post Title',
        layout: 'PostLayout',
        date: '2021-07-03',
        author: {
            firstName: 'Desmond',
            lastName: 'Eagle',
            role: 'Product Manager',
            bio: 'Nullam rhoncus tellus nec felis ullamcorper mattis. Cras convallis, velit in tincidunt posuere, nulla ipsum consequat metus, convallis lacinia ex eros eget leo.',
            image: {
                type: 'ImageBlock',
                url: '/images/desmond-eagle.jpg',
                altText: 'Photo of Desmond Eagle'
            }
        },
        excerpt: 'Gracchum patrem non beatiorem fuisse quam fillum, cum alter stabilire rem publicam studuerit, alter evertere. Quo plebiscito decreta a senatu est consuli quaestio.',
        featuredImage: {
            type: 'ImageBlock',
            url: '/images/post-1.jpeg',
            altText: 'Post Image'
        },
        markdown_content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ea mala virtuti magnitudine obruebantur. **Duo Reges: constructio interrete.** An hoc usque quaque, aliter in vita? Gracchum [patrem non beatiorem fuisse](https://www.stackbit.com/) quam fillum, cum alter stabilire rem publicam studuerit, alter evertere. Quo plebiscito decreta a senatu est consuli quaestio Cn. *Illud non continuo, ut aeque incontentae.* Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti videre, nihil tranquilli potest. Itaque hoc frequenter dici solet a vobis, non intellegere nos, quam dicat Epicurus voluptatem. Sin kakan malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret.\n\n## Sed Ille, UT Dixi, Vitiose\n\nUtrum igitur tibi litteram videor an totas paginas commovere? Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Ne in odium veniam, si amicum destitero tueri. Ne amores quidem sanctos a sapiente alienos esse arbitrantur. Quid ergo aliud intellegetur nisi uti ne quae pars naturae neglegatur? Quis istud, quaeso, nesciebat? Primum divisit ineleganter; Hoc unum Aristo tenuit: `praeter vitia atque virtutes negavit rem esse ullam aut fugiendam aut expetendam`. Et ille ridens: Video, inquit, quid agas; In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret.\n\n',
        bottomSections: [FeaturedPostsSectionStories.Primary.args, CtaSectionStories.Primary.args]
    },
    site: {
        navBar: NavBarStories.Primary.args,
        footer: FooterStories.Primary.args
    }
};

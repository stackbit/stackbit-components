import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';

export default function TestimonialsSection(props) {
    const style = props.style || 'style-a';
    const width = props.width || 'full';
    const height = props.height || 'auto';

    return (
        <div
            className={classNames('py-8 lg:py-12', {
                'mx-auto': width !== 'full',
                'max-w-screen-xl': width === 'wide',
                'max-w-screen-lg': width === 'narrow',
                'min-h-screen flex flex-col justify-center': height === 'viewport',
                'bg-base-50 text-base-900': style === 'style-a',
                'bg-neutral text-base-50': style === 'style-b',
                'bg-neutral text-primary': style === 'style-c',
                'bg-primary text-base-900': style === 'style-d',
                'bg-secondary text-base-900': style === 'style-e'
            })}
        >
            <div
                className={classNames('mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-8', {
                    'xl:max-w-screen-xl': width !== 'narrow'
                })}
            >
                <TestimonialVariants {...props} />
            </div>
        </div>
    );
}

function TestimonialVariants({ variant, ...props }) {
    variant = variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return TestimonialsVariantA(props);
        case 'variant-b':
            return TestimonialsVariantB(props);
    }
    return null;
}

function TestimonialsVariantA(props) {
    return (
        <>
            {(props.testimonials || []).map((testimonial, idx) => (
                <blockquote key={idx} className="max-w-5xl mx-auto py-8">
                    {testimonial.logo && <img src={testimonial.logo} alt={testimonial.logo_alt} className="mx-auto mb-10" />}
                    {testimonial.quote && (
                        <div className="text-center text-3xl sm:text-4xl">
                            <ReactMarkdown>{testimonial.quote}</ReactMarkdown>
                        </div>
                    )}
                    {(testimonial.name || testimonial.title) && (
                        <footer className="mt-8 text-center text-sm">
                            {testimonial.image && (
                                <img src={testimonial.image} alt={testimonial.image_alt} className="mx-auto mb-4 rounded-full object-cover w-14 h-14" />
                            )}
                            <strong className="block mb-0.5 font-medium text-lg">{testimonial.name}</strong>
                            {testimonial.title}
                        </footer>
                    )}
                </blockquote>
            ))}
        </>
    );
}

function TestimonialsVariantB(props) {
    return (
        <>
            {(props.testimonials || []).map((testimonial, idx) => (
                <blockquote key={idx} className="max-w-5xl mx-auto py-8 sm:flex">
                    {testimonial.image && (
                        <div className="mb-8 sm:flex-shrink-0 sm:mb-0 sm:mr-10">
                            <img
                                src={testimonial.image}
                                alt={testimonial.image_alt}
                                className="mx-auto mb-8 object-cover rounded-full w-36 h-36 sm:w-48 sm:h-48"
                            />
                        </div>
                    )}
                    <div className="sm:flex-grow">
                        {testimonial.quote && (
                            <div className="text-3xl sm:text-4xl">
                                <ReactMarkdown>{testimonial.quote}</ReactMarkdown>
                            </div>
                        )}
                        {(testimonial.name || testimonial.title) && (
                            <footer className="mt-8 text-center text-sm sm:text-left">
                                <strong className="block font-medium mb-0.5 text-lg">{testimonial.name}</strong>
                                {testimonial.title}
                            </footer>
                        )}
                    </div>
                </blockquote>
            ))}
        </>
    );
}

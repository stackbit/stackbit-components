import ReactMarkdown from 'react-markdown';

export default function TestimonialsSection(props) {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <TestimonialVariants {...props} />
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
        <div className="mx-auto lg:max-w-screen-lg">
            {(props.testimonials || []).map((testimonial, idx) => (
                <blockquote key={idx} className="max-w-5xl mx-auto mb-12">
                    {testimonial.logo && (
                        <img src={testimonial.logo} alt={testimonial.logo_alt} className="mx-auto mb-10" />
                    )}
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
                            <strong className="block mb-0.5 text-lg">{testimonial.name}</strong>
                            {testimonial.title}
                        </footer>
                    )}
                </blockquote>
            ))}
        </div>
    );
}

function TestimonialsVariantB(props) {
    return (
        <div className="mx-auto lg:max-w-screen-lg">
            {(props.testimonials || []).map((testimonial, idx) => (
                <blockquote key={idx} className="max-w-5xl mx-auto mb-12 sm:flex">
                    {testimonial.image && (
                        <div className="mb-8 sm:flex-shrink-0 sm:mb-0 sm:mr-10">
                            <img src={testimonial.image} alt={testimonial.image_alt} className="mx-auto mb-8 object-cover rounded-full w-36 h-36 sm:w-48 sm:h-48" />
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
                                <strong className="block mb-0.5 text-lg">{testimonial.name}</strong>
                                {testimonial.title}
                            </footer>
                        )}
                    </div>
                    
                </blockquote>
            ))}
        </div>
    );
}

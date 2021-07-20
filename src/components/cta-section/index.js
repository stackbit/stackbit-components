import ReactMarkdown from 'react-markdown';
import Badge from '../badge';
import Button from '../button';
import Link from '../link';
import classNames from 'classnames';

export default function CTASection(props) {
    const style = props.style || 'style-a';
    const width = props.width || 'full';
    const height = props.height || 'auto';
    const alignHoriz = props.alignHoriz || 'left';
    const actions = props.actions || [];

    return (
        <div
            className={classNames('py-16 lg:py-20', {
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
                <div
                    className={classNames('max-w-2xl mb-6', {
                        'mx-auto text-center': alignHoriz === 'center'
                    })}
                >
                    {props.badge && <Badge label={props.badge} className="bg-accent text-base-900" />}
                    {props.title && (
                        <h2 className="font-medium font-sans text-3xl tracking-tight sm:text-4xl mb-6">
                            <ReactMarkdown allowedElements={['br', 'span', 'strong']} unwrapDisallowed={true} components={components}>
                                {props.title}
                            </ReactMarkdown>
                        </h2>
                    )}
                    {props.description && <ReactMarkdown className="md:text-lg">{props.description}</ReactMarkdown>}
                </div>
                <div
                    className={classNames('flex flex-col items-center md:flex-row', {
                        'justify-center': alignHoriz === 'center'
                    })}
                >
                    {actions &&
                        props.actions.map((action, idx) =>
                            action.type === 'button' ? (
                                <Button
                                    key={idx}
                                    {...action}
                                    className={classNames(
                                        'w-full mb-3 md:w-auto md:mb-0',
                                        alignHoriz === 'left' ? 'md:mr-4' : 'md:mx-2',
                                        style === 'style-a' ? 'bg-primary text-base-900' : 'bg-neutral-variant text-base-50'
                                    )}
                                />
                            ) : (
                                <Link key={idx} {...action} className={classNames(alignHoriz === 'left' ? 'md:mr-4' : 'md:mx-2')} />
                            )
                        )}
                </div>
            </div>
        </div>
    );
}

const components = {
    strong({ children }) {
        return <span className="inline-block text-accent">{children}</span>;
    }
};

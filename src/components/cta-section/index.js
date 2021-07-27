import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import Badge from '../badge';
import Button from '../button';
import Link from '../link';

export default function CTASection(props) {
    const colorSchemeClass = props.colors || 'colors-a';
    const width = props.width || 'full';
    const height = props.height || 'auto';

    return (
        <div
            className={classNames(colorSchemeClass, 'py-16 lg:py-20', {
                'mx-auto': width !== 'full',
                'max-w-screen-xl': width === 'wide',
                'max-w-screen-lg': width === 'narrow',
                'min-h-screen flex flex-col justify-center': height === 'viewport'
            })}
        >
            <div
                className={classNames('mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-8', {
                    'xl:max-w-screen-xl': width !== 'narrow',
                    'w-full': height === 'viewport'
                })}
            >
                <CtaVariants {...props} />
            </div>
        </div>
    );
}

function CtaVariants({ variant, ...props }) {
    variant = variant || 'variant-a';
    switch (variant) {
        case 'variant-a':
            return CtaButtonsBottom(props);
        case 'variant-b':
            return CtaButtonsRight(props);
    }
    return null;
}

function CtaButtonsBottom(props) {
    const alignHoriz = props.alignHoriz || 'left';
    const actions = props.actions || [];
    return (
        <>
            <div className={classNames({'text-center': alignHoriz === 'center'})}>
                {CtaContent(props)}
            </div>
            <div
                className={classNames('flex flex-wrap items-center', {
                    'justify-center': alignHoriz === 'center',
                    'mt-8': props.badge || props.title || props.text
                })}
            >
                {actions.length > 0 && actions.map((action, idx) =>
                    action.type === 'button' ? (
                        <Button
                            key={idx}
                            {...action}
                            className={classNames(
                                'mb-3',
                                alignHoriz === 'left' ? 'mr-4' : 'mx-2'
                            )}
                        />
                    ) : (
                        <Link key={idx} {...action} className={classNames('mb-3', alignHoriz === 'left' ? 'mr-4' : 'mx-2')} />
                    )
                )}
            </div>
        </>
    );
}

function CtaButtonsRight(props) {
    const alignHoriz = props.alignHoriz || 'left';
    const actions = props.actions || [];
    return (
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className={classNames({'text-center lg:text-left': alignHoriz === 'center'})}>
                {CtaContent(props)}
            </div>
            <div className={classNames('flex flex-col', alignHoriz === 'center' ? 'items-center' : 'items-start lg:items-center')}>
                {actions.length > 0 && actions.map((action, idx) =>
                    action.type === 'button' ? (
                        <Button
                            key={idx}
                            {...action}
                            className="mb-3"
                        />
                    ) : (
                        <Link key={idx} {...action} className="mb-3" />
                    )
                )}
            </div>
        </div>
    );
}

function CtaContent(props) {
    const alignHoriz = props.alignHoriz || 'left';
    return (
        <>
            {props.badge && <Badge label={props.badge} />}
            {props.title && (
                <h2 className="font-medium font-sans text-3xl tracking-tight sm:text-4xl mb-6">
                    <ReactMarkdown allowedElements={['br', 'span', 'strong']} unwrapDisallowed={true} components={components}>
                        {props.title}
                    </ReactMarkdown>
                </h2>
            )}
            {props.text && <ReactMarkdown className={classNames('max-w-2xl md:text-lg', {'mx-auto': alignHoriz === 'center'
            })}>{props.text}</ReactMarkdown>}
        </>
    );
}

const components = {
    strong({ children }) {
        return <span className="sb-highlight inline-block">{children}</span>;
    }
};

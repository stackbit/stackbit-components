import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import Badge from '../Badge';
import React from 'react';
import InlineMarkdown from '../InlineMarkdown';

export default function ContentSection(props) {
  const alignHoriz = props.alignHoriz || 'left';
  const colors = props.colors || 'colors-a';
  const width = props.width || 'full';
  const height = props.height || 'auto';
  return (
    <div
      className={classNames(colors, 'py-16 lg:py-20', {
        'mx-auto': width !== 'full',
        'max-w-screen-xl': width === 'wide',
        'max-w-screen-lg': width === 'narrow',
        'min-h-screen flex flex-col justify-center': height === 'viewport'
      })}
      data-sb-field-path={props.annotationPrefix}
    >
      <div
        className={classNames('mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-8', {
          'xl:max-w-screen-xl': width !== 'narrow',
          'w-full': height === 'viewport'
        })}
      >
        <div
          className={classNames('max-w-3xl mx-auto', {
            'text-center': alignHoriz === 'center',
            'text-right': alignHoriz === 'right'
          })}
        >
            {props.badge && <Badge label={props.badge} className="sb-badge inline-block mb-4 text-xs" data-sb-field-path=".badge" />}
            {props.title && (
              <h2 className="text-3xl tracking-tight sm:text-4xl" data-sb-field-path=".title">
                <InlineMarkdown>{props.title}</InlineMarkdown>
              </h2>
            )}
            {props.subtitle && <p className="md:text-lg" data-sb-field-path=".subtitle">{props.subtitle}</p>}
            {props.text && (
              <Markdown
                options={{ forceBlock: true }}
                className={classNames('md:text-lg', {
                    'mt-6': props.badge || props.title || props.subtitle
                })}
                data-sb-field-path=".text"
              >
                {props.text}
              </Markdown>
            )}
          </div>
      </div>
    </div>
  );
}

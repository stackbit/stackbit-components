import React from 'react';
import classNames from 'classnames';

export default function VariantB(props) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:pb-10">
      {props.features.map((feature) => (
        <div className="bg-white px-6 py-6 text-color f-f-l shadow-lg mt-10 xl:-mt-20">
          <h1 className="text-3xl font-bold w-1/2">{feature.heading}</h1>
          <div className="flex justify-end w-full items-end">
            <img src={feature.icon} />
          </div>
        </div>
      ))}
    </div>
  );
}

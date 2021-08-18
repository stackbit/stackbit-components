import React from 'react';

export default function VariantA(props) {
  return (
    <div className="">
      <div className="text-center mb-2">
        <h2>{props.heading}</h2>
        <h3>{props.subHeading}</h3>
      </div>
      <div className="flex">
        <div className="w-1/3">
          {props.features.map((feature, index) => (
            <div key={index} className="flex mb-2">
              <div className="flex-none mr-3 mr-5">
                <img width="100" height="100" src={feature.icon} />
              </div>
              <div className="flex-1">
                <h3>{feature.heading}</h3>
                <p>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-2/3">
          <img src={props.image} />
        </div>
      </div>
    </div>
  );
}

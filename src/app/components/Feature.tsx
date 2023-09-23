"use client";

import FeatureCard from "./FeatureCard";
const Feature = (props:any) => {
  console.log(props.features)
  return (
    <div className="bg-[#000000] w-full pt-32 pr-15 pl-15 sm:pr-20 sm:pl-20 py-10">
      <div className="flex flex-col gap-24">
        <div className="flex flex-col justify-center items-center">
          <div className="text-white max-w-[506px] font-inter font-medium text-3xl lg:text-4xl xl:text-5xl leading-70 tracking-minus-4 text-center">{props.title}</div>
        </div>
        <div className="text-white xl:px-[10%] flex flex-wrap justify-center gap-2">
          {props.features.map((item:any, index:string) => {
            return (
              <FeatureCard
                key={index}
                title={item.featureTile}
                description={item.featureDescription}
                imageURL={item.featureImageURL}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;

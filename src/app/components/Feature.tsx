"use client";

import FeatureCard from "./FeatureCard";
const Feature = (props:any) => {
  return (
    <div className="bg-[#000000] w-full pt-32 pr-15 pl-15 sm:pr-20 sm:pl-20 py-10">
      <div className="flex flex-col gap-24">
        <div className="flex flex-col justify-center items-center">
          <div className="text-white max-w-[506px] font-inter font-medium text-3xl lg:text-4xl xl:text-5xl leading-70 tracking-minus-4 text-center">{props.title}</div>
        </div>
        <div className="text-white xl:px-[20%] flex flex-wrap justify-center gap-5">
          {props.features.map((item:any, index:string) => {
            const indexAsInt = parseInt(index, 10);
            return (
              <FeatureCard
                key={index}
                itemNumber={indexAsInt}
                title={item.featureTile}
                description={item.featureDescription}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;

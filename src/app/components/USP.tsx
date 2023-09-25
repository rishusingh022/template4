"use client";

import USPCard from "./USPCard";
const USP = (props: any) => {
  return (
    <div className="bg-[#000000] w-full pt-32 pr-15 pl-15 sm:pr-20 sm:pl-20 py-10">
      <div className="flex flex-col gap-24">
        <div className="flex flex-col justify-center items-center">
          <div className="text-white max-w-[550px] font-inter font-medium text-3xl lg:text-4xl xl:text-5xl leading-70 tracking-minus-4 text-center">
            {props.title}
          </div>
        </div>
        <div className="text-white flex flex-wrap justify-center gap-5">
          {props.USP.map((item: any, index: string) => {
            // Use the 'index' parameter
            return (
              <USPCard
                key={index}
                title={item.USPTitle}
                description={item.USPDescription}
                imageURL={item.USPImageURL}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default USP;

"use client";
import React from "react";
import Image from "next/image";
const FeatureCard = (props:any) => {
  console.log(props)
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-[80%] md:w-[280px] justify-center h-[200px] rounded-2xl bg-[#1C1C1E] text-[#8E8E98] hover:bg-[#8B5CF6] hover:text-white transition duration-300 ease-in-out cursor-pointer"
    >
      <div className="py-[22px] px-[24px] gap-6 flex flex-col">
        <div>
          <Image
            src={props.imageURL}
            alt="Feature"
            width={42}
            height={42}
            objectFit="contain"
          />
        </div>
        <div className="font-medium text-14px leading-21px">
          <span className="text-white">{props.title}</span> {props.description}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;

"use client";
import Image from "next/image";

const svgRightIcon = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z"
      fill="#10B981"
    />
  </svg>
);
const PricingCard = (props: any) => {
  return (
    <div
      style={{
        background: props.flag
          ? "linear-gradient(180deg, #2A0A9A 5.07%, #804EBD 62.52%, #D2A6CA 123.75%)"
          : undefined,
      }}
      className="bg-black flex w-[300px] min-h-[586px] flex-col items-start shrink-0 rounded-[20px] "
    >
      <div className="p-6 flex flex-col items-start gap-6 ">
        <div className="flex flex-col items-start gap-2">
          <div className=" text-white font-inter text-lg font-medium">
            {props.level}
          </div>
          <div className=" text-[#D1D5DB] font-inter text-sm font-normal">
            {props.description}
          </div>
        </div>
        <div className="flex items-end gap-[4px]">
          <div className="text-white font-inter text-4xl font-extrabold">
            ${props.price}
          </div>
          <div>/mo</div>
        </div>
        <div
          className={`flex py-[9px] px-[17px] justify-center items-center self-stretch rounded-full border ${
            props.flag ? "border-black bg-white" : "border-white"
          } `}
        >
          <div
            className={`text-${
              props.flag ? "black" : "white"
            } font-inter text-sm font-medium`}
          >
            Buy Plan
          </div>
        </div>
      </div>
      {props.flag ? <div className="h-[1px] bg-white w-full"></div> : null}
      <div className="p-6 flex flex-col items-start gap-6">
        <div className="text-white font-inter text-xs font-medium uppercase tracking-[0.3px]">
          What’s included
        </div>
        <div className="flex flex-col items-start gap-4">
          {props.feature.map((item: any) => (
            <div key={item.id} className="flex items-start gap-3">
              {svgRightIcon}
              <div className="text-[#D1D5DB] font-inter text-sm font-normal">
                {item.feature}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;

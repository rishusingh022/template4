"use client";
import PricingCard from "./PricingCard";
const Pricing = (props: any) => {
  return (
    <div className="bg-[#000000] w-full flex flex-col gap-12 px-32 pt-5">
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-1">
          <div className="h-full text-center font-inter text-3xl font-medium tracking-tighter text-[#F1F1EF]">
            {props.title}
          </div>
          <div className="h-full text-center text-gray-300 font-inter text-lg font-normal">
            {props.subtitle}
          </div>
        </div>
        <div className="flex text-white flex-row">
          <div className="flex justify-center items-center min-w-[320px] p-[2px] gap-[2px] bg-[#F3F4F6] rounded-[100px] h-11">
            <div className="flex w-1/2 bg-[#2A0A9A] py-[9px] px-[25px] justify-center items-center rounded-[20px]">
              <div className="text-white-700 font-inter text-[14px] font-medium leading-[20px]">
                Monthly billing
              </div>
            </div>
            <div className="flex w-1/2 py-[9px] px-[25px] justify-center items-center rounded-[20px]">
              <div className="text-gray-700 font-inter text-[14px] font-medium leading-[20px]">
                Yearly billing
              </div>
            </div>
          </div>
        </div>
        <div className="text-white flex flex-wrap justify-center items-start gap-8 shrink-0">
          {props.plans.map((plan:any,index:number) => (
            <div key={plan.id} className="bg-black min-h-[645px]">
              <PricingCard flag={index%2!==0} level={plan.level} price={plan.price} description={plan.description} feature={plan.features} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;

"use client";
import Image from "next/image";

const Dashboard = (props:any) => {
  return (
    <div className="bg-[#000000] pt-9 pr-19 pl-19 sm:pr-24 sm:pl-24 flex justify-center items-center">
      <div className="max-w-[1400px] p-2 rounded-3xl border min-h-[754px] border-[#3E3E3E] flex flex-col mx-2">
        <div className="pt-5 pl-5">
        <Image src='/template3_heroSection_icon.svg'width={43.75} height={40} alt="logo" />
        </div>
        <div className="py-10 gap-16 xl:gap-24 m-5 min-h-[686.51px] px-16 rounded-[20px] bg-gradient-to-b from-[#2A0A9A] via-[#804EBD] to-[#D2A6CA] flex xl:flex-row flex-col items-center">
          <div className="w-full md:px-5 xl:w-[50%] h-[100%] flex flex-col justify-center items-center gap-[25px]">
            <div className="font-inter font-medium text-4xl md:text-5xl xl:text-7xl xl:leading-[70px] text-white">{props.title}</div>
            <div className="font-inter font-normal text-base xl:text-xl leading-[28px] text-[#E5E7EB]">{props.description}</div>
          </div>
          <div>
            <Image
              src='/template3_heroSection_image.png'
              alt="Dashboard"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

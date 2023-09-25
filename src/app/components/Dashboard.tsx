"use client";
import Image from "next/image";
import DashboardImg from "../../assets/DashboardImg.png";
const Dashboard = (props:any) => {
  return (
    <div className="bg-[#000000] pt-9 pr-19 pl-19 sm:pr-24 sm:pl-24">
      <div className="p-2 rounded-3xl border min-h-[754px] border-[#3E3E3E] flex flex-col mx-2">
        <div className="pt-5 pl-5">
          <svg
            width="46"
            height="10"
            viewBox="0 0 46 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="4.9918"
              cy="5.03313"
              rx="4.49864"
              ry="4.82097"
              fill="#BA0E0E"
            />
            <ellipse
              cx="22.9864"
              cy="5.03313"
              rx="4.49864"
              ry="4.82097"
              fill="#EF930A"
            />
            <ellipse
              cx="40.9808"
              cy="5.03313"
              rx="4.49864"
              ry="4.82097"
              fill="#0CCB2A"
            />
          </svg>
        </div>
        <div className="py-10 gap-16 xl:gap-24 m-5 min-h-[686.51px] px-16 rounded-[20px] bg-gradient-to-b from-[#2A0A9A] via-[#804EBD] to-[#D2A6CA] flex xl:flex-row flex-col items-center">
          <div className="w-full md:px-5 xl:w-[50%] h-[100%] flex flex-col justify-center items-center gap-[25px]">
            <div className="font-inter font-medium text-4xl md:text-5xl xl:text-7xl xl:leading-[70px] text-white">{props.title}</div>
            <div className="font-inter font-normal text-base xl:text-xl leading-[28px] text-[#E5E7EB]">{props.description}</div>
          </div>
          <div>
            <Image
              src={DashboardImg}
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

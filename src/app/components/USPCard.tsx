"use client";
import Image from "next/image";
const USPCard = (props:any) => {
  const cardBackgroundImage =
    "https://storage.googleapis.com/ftest-image/uspCardBackground.png";
  const ellipseBackgroundImage =
    "https://storage.googleapis.com/ftest-image/EllipseUSP.png";

  return (
    <div
      className="w-96 h-[348px] px-[36px] py-[54px] rounded-[20px] bg-cover cursor-pointer"
      style={{ backgroundImage: `url(${cardBackgroundImage})` }}
    >
      <div className="flex flex-col justify-center items-center gap-[30px]">
        <div
          className="w-[118px] h-[118px] bg-cover flex justify-center items-center"
          style={{ backgroundImage: `url(${ellipseBackgroundImage})` }}
        >
          <Image
            src={props.imageURL}
            alt="USP"
            width={42}
            height={42}
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          <div className="font-700 text-2xl leading-6 text-center">
            {props.title}
          </div>
          <div className="text-[#ADADAD] font-Lorin font-normal text-base leading-6 tracking-tight text-center">
            {props.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default USPCard;

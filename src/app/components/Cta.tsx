import Image from "next/image";

const HorizontalImageCard = (props:any) => {
  return (
    <div className="bg-[#000000] px-5 pt-32 pr-19 pl-19 sm:pr-24 sm:pl-24 flex justify-center items-center">
      <div className="flex flex-col flex-wrap lg:flex-row max-w-[1400px]">
        <div className="min-h-[406px] w-full lg:w-1/2" style={{ backgroundImage: `url("https://storage.googleapis.com/ftest-image/PricingImageURL.png")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
        <div className="w-full lg:w-1/2 flex flex-col gap-8 py-16 lg:pl-10">
          <div className="flex flex-col gap-4">
            <div className="text-4xl font-inter font-medium text-white">
              {props.title}
            </div>
            <div className="text-lg font-inter font-normal text-[#D1D5DB]">
              {props.description}
            </div>
          </div>
          <button className="font-inter bg-[#8B5CF6] pt-[13px] p-[15px] w-[108px] text-white rounded-md cursor-pointer">
            Add Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalImageCard;

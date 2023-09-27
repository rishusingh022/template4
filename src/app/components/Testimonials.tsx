"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
const Testimonial = (props: any) => {


  const testimonialData = props.testimonials;

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? testimonialData.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonialData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="bg-[#000000] w-full flex flex-col justify-center items-center pt-10">
      <div className="text-[#F1F1EF] text-4xl lg:text-5xl font-medium font-inter text-center pb-5">
        What they said about us
      </div>

      <div className="max-w-[1000px] h-[581px] w-[70%] m-auto py-16 px-4 relative group">
        <div
          style={{
            background:
              "linear-gradient(180deg, #2A0A9A 5.07%, #804EBD 62.52%, #D2A6CA 123.75%)",
          }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        >
          <div className="flex h-full w-full flex-col justify-center items-center gap-5">
            <div className="text-white text-center w-3/4">
              {testimonialData[currentIndex].testimonial}
            </div>
            <div className="flex w-3/4 justify-center items-center gap-2">
              <Image
                src={testimonialData[currentIndex].imageURL}
                alt="Testimonial Person"
                width={59}
                height={59}
                className="p-1"
              />
              <div className="flex flex-col p-1 g-1">
                <div className="text-white text-lg">
                  {testimonialData[currentIndex].name}
                </div>
                <div className="text-white text-sm">
                  {testimonialData[currentIndex].designation}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {testimonialData.map((slide:any, slideIndex:any) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

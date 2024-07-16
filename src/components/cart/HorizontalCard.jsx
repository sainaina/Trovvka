import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const HorizontalCard = () => {
  return (
    <div className="my-8 mx-[45px] self-stretch pr-12 rounded-[10px] border border-solid border-black border-opacity-10 max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className=" flex flex-col w-[37%] max-md:ml-0 max-md:w-auto bg-slate-500 rounded-[10px] rounded-r">
          <img
            loading="lazy"
            src="src\assets\image\b6581b576b69a2cce08da3a05ae4e875.jpg"
            alt=""
            className=" grow w-auto  aspect-[1.64] max-md:mt-10"
          />
        </div>
        <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-5 justify-between self-start">
                <img
                  loading="lazy"
                  src=".//src/assets/image/profile.png"
                  alt=""
                  className="shrink-0 rounded-full aspect-square w-[50px] h-[50px] mt-4"
                />
                <div className="flex flex-col self-start mt-4">
                  <div className="text-base leading-7 text-black font-normal">
                    Hello Campany
                  </div>
                  <div className="-mt-2 text-sm leading-7 text-neutral-500">
                    22 july 2024
                  </div>
                </div>
              </div>

                <FaRegHeart className=' text-xl text-Primary shrink-0 self-end mt-8 aspect-[0.96] w-[23px]'/>
            </div>
            <div className="mt-3 leading-6 text-neutral-500 max-md:max-w-full text-[15px]">
              Trust our skilled plumbers for all your plumbing needs, from
              repairs to installations, ensuring your home's water systems run
              smoothly.
            </div>
            <div className="flex gap-5 pr-4 mt-3 max-w-full text-xs leading-7 text-black whitespace-nowrap w-[190px]">
                <div className=' w-28 h-5 flex justify-between text-Secondary float-left mt-[1px] text-[15px]'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaRegStar />
                </div>

                <div className="justify-center items-start px-3.5 -mt-1 bg-Secondary rounded">
                    <p className=" text-white">4/5</p>
                </div>

            </div>

            <div className="justify-center self-start px-3 text-[14px]  text-sm leading-7 text-white bg-Primary rounded mb-4">
              Home Service
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
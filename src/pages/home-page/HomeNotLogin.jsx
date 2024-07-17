"use client";
"use client";

import { Dropdown } from "flowbite-react";
import { Carousel } from "flowbite-react";
import React from "react";
import DropdownMenu from "../../components/button/DropdownMenu";
import { Metadata } from "../../lib/Metadata";

export function HomeNotLogin() {
  return (
    
    <div className="w-[100%] h-[7681px]">
        <div>
        <Metadata
          title="Service-TrovKa"
          description="Welcome to Service-TrovKa"
          author="SainaIna"
          keywords="services, trovka, home"
          thumbnail="https://i.pinimg.com/736x/c3/95/44/c3954438fedca66f0f57c727f5dd236c.jpg"
        />
      </div>
      <div className="justify-center h-[397px] p-28 flex mt-[50px]">
        <div className="w-[440px] h-[90px] text-lg">
          <h1 className="text-[#FFB600] text-3xl font-semibold">TROVKA</h1>
          <div className="mt-5">
            <p>
              Welcome to TROVKA, which means "Need" in English. is your go to
              website for finding and offering various services.
            </p>
          </div>
          <div className="mt-5">
            <div className="flex justify-between items-center w-[490px] pl-20 text-lg rounded-2xl border border-blue-900 border-solid max-md:flex-wrap max-md:pl-5 h-[58px]">
              <div className="flex gap-5 ml-[-60px] my-auto text-gray-400">
                <Dropdown label="Category" inline className="mt-[-10px]">
                  <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg text-gray-500 focus:">
                    Food
                  </Dropdown.Item>
                  <Dropdown.Item className="focus:bg-[#022278] focus:text-white text-gray-500 rounded-lg">
                    Café
                  </Dropdown.Item>
                  <Dropdown.Item className="focus:bg-[#022278] focus:text-white  text-gray-500 rounded-lg">
                    Juice Bar
                  </Dropdown.Item>
                  <Dropdown.Item className="focus:bg-[#022278] focus:text-white  text-gray-500 rounded-lg">
                    Pizza
                  </Dropdown.Item>
                </Dropdown>
                <div className="shrink-0 self-stretch w-px bg-blue-900 border border-blue-900 border-solid" />
              </div>
              <div className="flex gap-5 justify-between max-md:flex-wrap  h-[58px]">
                <div className="my-auto text-gray-400">Location </div>
                <a href="" className="">
                  <div className="flex gap-3.5 justify-center px-8 py-5 text-white bg-blue-900 rounded-xl max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/387f3f5af396c32d495c82ca145ef32ee3665b96e6b36b47e40e01d537a89ad8?"
                      className="shrink-1 aspect-square w-[18px] h-[18px]"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-[365px] ml-[290px] mt-[-80px] h-[320px] ">
          <div className="">
            <img className="" src="src/assets/image/Picture1.png" alt="" />
            <div className="mt-[-500px] flex w-[500px] h-[500px] z-50 ">
              <svg
                width="166"
                height="164"
                viewBox="0 0 166 164"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 30C1.5 14.2599 14.2599 1.5 30 1.5H164.5V162.5H1.5V30Z"
                  stroke="url(#paint0_linear_1564_3671)"
                  stroke-width="3"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1564_3671"
                    x1="83"
                    y1="0"
                    x2="83"
                    y2="164"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#ACC3FF" />
                    <stop offset="1" stop-color="#FFDF91" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="mt-10 ml-10">
                <svg
                  width="166"
                  height="164"
                  viewBox="0 0 166 164"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 1.5H136C151.74 1.5 164.5 14.2599 164.5 30V162.5H1.5V1.5Z"
                    stroke="url(#paint0_linear_1564_3670)"
                    stroke-width="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1564_3670"
                      x1="83"
                      y1="0"
                      x2="83"
                      y2="164"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#88A8FF" />
                      <stop offset="1" stop-color="#FFDF91" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="mt-[-230px] flex justify-center">
              <svg
                width="166"
                height="164"
                viewBox="0 0 166 164"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 1.5H164.5V162.5H30C14.2599 162.5 1.5 149.74 1.5 134V1.5Z"
                  stroke="url(#paint0_linear_1564_3672)"
                  stroke-width="3"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1564_3672"
                    x1="83"
                    y1="0"
                    x2="83"
                    y2="164"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#88A8FF" />
                    <stop offset="1" stop-color="#FFDF91" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="ml-10 mt-10">
                <svg
                  width="166"
                  height="164"
                  viewBox="0 0 166 164"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 1.5H164.5V134C164.5 149.74 151.74 162.5 136 162.5H1.5V1.5Z"
                    stroke="url(#paint0_linear_1564_3669)"
                    stroke-width="3"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1564_3669"
                      x1="83"
                      y1="0"
                      x2="83"
                      y2="164"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#88A8FF" />
                      <stop offset="1" stop-color="#FFDF91" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="mt-[200px] text-center text-[#022278] font-bold">
        <div className="text-2xl">
          <p>Welcome To Our Services</p>
        </div>
      </div>

      <DropdownMenu/>
      
      <div className="w-full h-[445px] mt-20">
        <Carousel slideInterval={5000}>
          <img
            src="https://i.pinimg.com/564x/d7/ce/2e/d7ce2e83c4dacb47b965c8a1cd8a848d.jpg"
            alt="Slide 1"
          />
          <img
            src="https://i.pinimg.com/564x/d7/ce/2e/d7ce2e83c4dacb47b965c8a1cd8a848d.jpg"
            alt="Slide 2"
          />
          <img
            src="https://i.pinimg.com/564x/b5/b4/e1/b5b4e1bed38c103a787f43f51c4969ee.jpg"
            alt="Slide 3"
          />
          <img
            src="https://i.pinimg.com/564x/06/8c/dd/068cdd53d9a29f7fc89e327d8f516068.jpg"
            alt="Slide 4"
          />
          <img
            src="https://i.pinimg.com/564x/23/8e/66/238e6665ae776a4aea07d95c6b66bd2a.jpg"
            alt="Slide 5"
          />
        </Carousel>

        
      </div>

      <div className="w-[100%] items-center justify-center flex h-[56px] mt-10">
        <div className="bg-[#FFB600] w-[15%] rounded-xl text-center p-5 h-[100%]">
          <p>Get More Services</p>
        </div>
      </div>
      <div className="w-[100%] h-[150px] mt-10 text-[#022278] text-xl font-semibold">
        <p>Pupolar Category</p>
      </div>
      <div className="w-[100%] h-[387px] items-center justify-center flex">
        <div className="w-[80%] h-[100%] bg-[#022278] rounded-[50px]">
          <div className="w-[100%] h-[30%] bg-gray-400 rounded-[40px_40px_0px_0px] text-center text-3xl text-white">
            <p>Trusted by thousands of people all over the world</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
export default HomeNotLogin;

"use client";
"use client";

import * as React from "react";
import { Dropdown } from "flowbite-react";
export function DropdownMenu() {
  return (
    <div className="h-[70px] w-full bg-[#022278] flex justify-evenly font-simple text-white text-lg mt-10">
      <Dropdown label="Restaurants" inline className="mt-[-30px]">
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm focus:">
          Food
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
          Café
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
          Juice Bar
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
          Pizza
        </Dropdown.Item>
      </Dropdown>
      <Dropdown label="Education" inline className="mt-[-30px]">
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
          IT Course
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
          English
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
          Chinese
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
          Khmer
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
          Math
        </Dropdown.Item>
      </Dropdown>
      <Dropdown label="Auto Services" inline className="mt-[-30px]">
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
          Auto Repair
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
          Car Repair
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
          Car Wash
        </Dropdown.Item>
      </Dropdown>
      <Dropdown label="Home Services" inline className="mt-[-30px]">
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
          Electricians
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
          Contractores
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
          Cleaners
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
          HVAC
        </Dropdown.Item>
      </Dropdown>
      <Dropdown label="Electronics" inline className="mt-[-30px]">
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-lg">
          TV and audio repair
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
          Computer repair
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-sm">
          Camera repair
        </Dropdown.Item>
        <Dropdown.Item className="focus:bg-[#022278] focus:text-white rounded-">
          Phone repair
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}
export default DropdownMenu;

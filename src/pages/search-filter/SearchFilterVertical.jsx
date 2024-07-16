import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaList } from "react-icons/fa6";
import { TbGridDots } from "react-icons/tb";
import { CartService } from "../../components/cart/CartService";
import { Pagination } from "../../components/common/Pagination";
import { useNavigate } from "react-router-dom";


export const SearchFilter = () => {
  const [isSortByOpen, setIsSortByOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSortByDropdown = () => {
    setIsSortByOpen(!isSortByOpen);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleGridNavigate = () => {
    navigate('/search-filter-hori');
  };

  return (
    <>
      <div className="w-full overflow-hidden mt-12 px-24">
        <div className="ml-[43px] h-[90px] ">
          <p className="pt-4 text-Primary font-bold text-2xl ">Search Filter</p>
        </div>
        <div className="ml-[43px] h-[90px] flex -mb-6">
          <div className="w-[50%] h-[100%] mt-4">
            <p className=" font-normal text-lg">English: 96 Courses Found</p>
          </div>
          <div className="px-5 h-[90px] w-[50%]">
            <ul className="flex justify-center ml-[58px]">
              <div className="relative">
                <button 
                  onClick={toggleSortByDropdown} 
                  className="flex justify-between border rounded-[8px] border-gray-500 w-[100px] pl-2 py-2 mr-5 mt-2 text-gray-500"
                >
                  Sort By <RiArrowDropDownLine className="text-3xl" />
                </button>
                {isSortByOpen && (
                  <ul className="absolute bg-white border border-gray-500 w-[100px] mt-2">
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 1</li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 2</li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 3</li>
                  </ul>
                )}
              </div>

              <div className="relative">
                <button 
                  onClick={toggleCategoryDropdown} 
                  className="flex justify-between border rounded-[8px] border-gray-500 w-[120px] pl-2 py-2 mr-5 mt-2 text-gray-500"
                >
                  Category <RiArrowDropDownLine className="text-3xl" />
                </button>
                {isCategoryOpen && (
                  <ul className="absolute bg-white border border-gray-500 w-[120px] mt-2">
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Category 1</li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Category 2</li>
                    <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Category 3</li>
                  </ul>
                )}
              </div>

              <button className="flex justify-center border  border-gray-500 w-[50px] h-[48px] text-black pt-4 mt-2 bg-Secondary "><TbGridDots  /></button>
             
              <button 
                onClick={handleGridNavigate}
                className="flex justify-center border  border-gray-500 w-[50px] h-[48px] text-black pt-4 mt-2  "
                >
                  <FaList />
              </button>
            </ul>
          </div>
        </div>

        <div className="flex justify-evenly flex-wrap">
          <CartService/>
          <CartService/>
          <CartService/>
        </div>

        <div className="flex justify-evenly flex-wrap">
          <CartService/>
          <CartService/>
          <CartService/>
        </div>

        <Pagination/>

      </div>
    </>
  );
};

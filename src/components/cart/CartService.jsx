import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export const CartService = () => {
  return (
    <div className="flex gap-[30px] flex-wrap">
        <div className=' w-full h-full flex justify-center items-center'>
            <div className='w-[300px] h-[380px]  rounded-lg  bg-white border-[1px] mt-5  box-content'>
                <div className='w-[300px] h-[170px] bg-orange-500 rounded-t-lg'>
                    <img src=".///src/assets/service-image/board-laptop.jpg" alt="" className='w-[300px] h-[170px] rounded-t-lg object-cover' />
                </div>

                <div className='flex w-[300px] h-[210px] py-4 px-6  rounded-b-lg'>
                    <div className='w-[300px] h-[175px]'>
                        <div className='w-full h-12 '>
                            <div className='w-12 h-12  float-left '>
                                <img src=".//src/assets/image/profile.png" alt="" className='rounded-full'/>
                            </div>

                            <div className='w-[180px] h-12 float-right'>
                                    <p>Adminh</p>
                                    <p className=' text-sm'>10 July, 2024</p>      
                            </div> 
                        </div>

                        <div className='w-full pt-1 pb-1 overflow-x-hidden'>
                                <p>Lorem ipsum dolor sit amet consectetur. Libero, modi.</p>
                        </div>

                        <div className=' w-28 h-5 flex justify-between text-Secondary float-left mt-[6px]'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaRegStar />
                        </div>

                        <div className='w-12 h-5 bg-Secondary mt-[6px] float-left ml-6 flex items-center justify-center rounded-md'>
                            <p className=' text-sm text-white'>4/5</p>
                        </div>

                        <div className='w-full h-6 my-8'>
                            <div className='w-32 h-6 text-sm text-white bg-Primary flex justify-center rounded-md mt-11'>
                                <p>Home Service</p>
                            </div>

                            <div className='float-right -translate-y-[23px] -translate-x-3 '>
                                <FaRegHeart className=' text-xl text-Primary'/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

// linear-gradient(90deg, #8EADFF 0%, #FFDF90 100%)

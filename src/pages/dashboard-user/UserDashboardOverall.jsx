import React from 'react'
import { NavbarComponent } from '../../components/layout/NavbarComponent';
import { AiOutlineDashboard } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { VscPreview } from "react-icons/vsc";
import { RiLockPasswordLine } from "react-icons/ri";

const UserDashboardOverall = () => {
  return (
    <>

    <NavbarComponent/>
      <div className="flex flex-col rounded-2xl bg-neutral-100">
        
        <div className="mt-8 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-20 text-base tracking-wide leading-6 text-neutral-500 max-md:mt-6">
                <div className="flex gap-5 justify-between items-start pt-8 pb-14 pl-8 bg-white rounded-2xl max-md:pl-5">
                  
                  <div className="flex flex-col mt-2">
                    <div className="flex gap-4 font-bold text-Primary whitespace-nowrap">
                      <AiOutlineDashboard className='shrink-0 w-6 aspect-square text-[25px]'/>
                      <div>Dashboard</div>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <IoSettingsOutline className='shrink-0 w-6 aspect-square text-[25px]'/>
                      <div>Profile Settings</div>
                    </div>

                    <div className="flex gap-4 mt-8 whitespace-nowrap text-neutral-500">
                      <GrFavorite className='shrink-0 w-6 aspect-square text-[25px]'/>
                      <div>Favorite</div>
                    </div>

                    <div className="flex gap-4 mt-8 whitespace-nowrap">
                      <VscPreview className='shrink-0 w-6 aspect-square text-[25px]'/>
                      <div>Reviews</div>
                    </div>

                    <div className="flex gap-4 mt-8">
                      <RiLockPasswordLine className='shrink-0 w-6 aspect-square text-[25px]'/>
                      <div>Change Password</div>
                    </div>
                  </div>

                  <div className="shrink-0 w-1 bg-Primary h-[38px]" />
                </div>
                <div className="shrink-0 bg-white rounded-none h-[237px]" />
              </div>
            </div>

            <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-6 max-md:max-w-full">
                <div className="flex gap-4 self-start whitespace-nowrap max-md:flex-wrap">
                  
                  <div className="flex flex-1 flex-auto gap-5 justify-between px-8 py-6 bg-white rounded-lg border border-solid border-slate-100 max-md:pr-5">
                    <div className="flex flex-col">
                      <div className="text-sm leading-4 text-slate-400">
                        Reviews
                      </div>
                      <div className="mt-5 text-xl font-bold leading-6 text-slate-800">
                        14
                      </div>
                    </div>
                    <VscPreview className='shrink-0 w-16 aspect-square text-[50px] text-neutral-500'/>
                  </div>

                  <div className="flex flex-auto gap-5 justify-between py-6 pr-12 pl-5 bg-white rounded-lg border border-solid border-slate-100 max-md:px-5">
                    <div className="flex flex-col self-start">
                      <div className="text-sm leading-4 text-slate-400">
                        Favorite
                      </div>

                      <div className="mt-5 text-xl font-bold leading-6 text-slate-800">
                        4
                      </div>
                    </div>
                    <GrFavorite className='shrink-0 w-16 aspect-square text-[50px] text-neutral-500'/>
                  </div>
                  
                </div>
                
                <div className="flex flex-col items-center px-16 pt-20 pb-9 mt-6 bg-white rounded-2xl border border-solid border-slate-100 max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-2 mt-28 max-md:flex-wrap max-md:mt-10">
                    <div className="flex flex-col self-start text-xs text-right text-black whitespace-nowrap">
                      {/* <div>1000</div>
                      <div className="mt-10">750</div>
                      <div className="mt-11 max-md:mt-10">500</div>
                      <div className="mt-11 max-md:mt-10">250</div>
                      <div className="mt-11 max-md:mt-10">0</div> */}
                    </div>
                    <div className="flex flex-auto gap-0 max-md:flex-wrap">
                      <div className="flex flex-col items-center self-start">
                        {/* <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7087f297fc271b1fcfd4cefa469b57e43babef759a377a79037ad3b72e07bc8?"
                          className="w-2 border border-black border-solid aspect-[7.69] stroke-[1px] stroke-black"
                        /> */}
                        {/* <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/36c50b01f3fec12920664b3ee11e61f12718e95ecda07aeb0fc85791940e37c6?"
                          className="self-start w-px border border-black border-solid aspect-[0] stroke-[1px] stroke-black"
                        /> */}
                        {/* <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7087f297fc271b1fcfd4cefa469b57e43babef759a377a79037ad3b72e07bc8?"
                          className="w-2 border border-black border-solid aspect-[7.69] stroke-[1px] stroke-black"
                        /> */}
                      </div>
                      <div className="flex flex-col grow shrink-0 text-xs text-center text-black whitespace-nowrap basis-0 w-fit max-md:max-w-full">
                        {/* <img
                          loading="lazy"
                          srcSet="..."
                          className="w-full aspect-[3.85] max-md:max-w-full"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccec41c61d08ea60088025dbe11bc131a5f1e7c53699dd93827cd0f2992a3df0?"
                          className="w-full border border-black border-solid stroke-[1px] stroke-black max-md:max-w-full"
                        /> */}
                        <div className="flex gap-5 justify-between self-center mt-6 max-w-full w-[410px]">
                          {/* <div>0</div>
                          <div>1</div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDashboardOverall;






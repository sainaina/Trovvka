import React from "react";
export const Pagination = () => {
  return(
    <>
      <div className="w-full h-[80px] my-20">
        <ul className="flex gap-2 justify-center pt-6">
          <li><button className="border rounded-lg text-gray-300 px-3 py-1">Prev</button></li>
          <li><button className="border border-yellow-400 rounded-lg px-5 py-1 bg-yellow-400 text-white">1</button></li>
          <li><button className="border rounded-lg border-black px-5 py-1">2</button></li>
          <li><button className="border rounded-lg border-black px-5 py-1">3</button></li>
          <li><button className="px-2 py-1">...</button></li>
          <li><button className="border rounded-lg border-black px-5 py-1">10</button></li>
          <li><button className="border rounded-lg text-gray-300 px-3 py-1">Next</button></li>
        </ul>
      </div>
    </>
  )
}
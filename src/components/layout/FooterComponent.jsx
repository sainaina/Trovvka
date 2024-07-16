import React from 'react';
import { FaFacebook, FaTelegram } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { MdOutlineCopyright } from 'react-icons/md';

export const FooterComponent = () => {
  return (
    <>
      <footer className="bg-Primary w-full ">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
          <img src=".//src/assets/logo/logo-footer.png" alt="Logo" className="w-40 mb-8 md:mb-0 md:ml-14 md:-translate-y-5" />

          <div className="text-white uppercase flex flex-col md:flex-row md:translate-y-10 text-[20px] md:justify-between md:w-full md:px-16">
            <div className="mb-8 md:mb-0 md:mr-12">
              <p>Feature</p>
              <ul className="capitalize text-[17px] mt-4 md:mt-12 leading-8">
                <li><a href="#">Listing</a></li>
                <li><a href="#">Searching</a></li>
                <li><a href="#">Filtering</a></li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0 md:mr-12">
              <p>Categories</p>
              <ul className="capitalize text-[17px] mt-4 md:mt-12 leading-8">
                <li><a href="#">Education</a></li>
                <li><a href="#">Auto Services</a></li>
                <li><a href="#">Home Services</a></li>
                <li><a href="#">Restaurant</a></li>
                <li><a href="#">Electronics</a></li>
              </ul>
            </div>
            <div>
              <p>Contact Us</p>
              <ul className="capitalize text-[17px] mt-4 md:mt-12 leading-8">
                <li><a href="#">Address: 11st Toulkork, Phnom Penh</a></li>
                <li><a href="#">Email: trovka@gmail.com</a></li>
                <li><a href="#">Phone: 012 345 678</a></li>
                <li className="w-28 mt-2">
                  <div className="flex justify-between text-2xl items-center">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaTelegram /></a>
                    <a href="#"><IoLogoYoutube className="text-[28px]" /></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full h-[85px] mt-8 md:mt-16 border-t flex justify-center items-center text-white text-lg">
          <MdOutlineCopyright className="text-2xl mr-1" />
          <p>2024 TROVKA. All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

import React from 'react';
import { CiLogin, CiLight } from 'react-icons/ci';
import { NavLink, useNavigate } from 'react-router-dom';

export const NavbarNotLoginComponent = () => {
  const navigate = useNavigate();
  const menuList = [
    { 
      path: '/',
       title: 'Service'
   },
    { 
      path: '/category',
       title: 'Category' 
    },
    { 
      path: '/contact',
       title: 'Contact' 
    },
    { 
      path: '/about',
       title: 'About Us' 
    },
  ];

  return (
    <>
      <div className='w-full bg-Primary h-8 flex items-center justify-center'>
        <p className='text-white text-center text-[15px]'>Provide the best service</p>
      </div>

      <nav className='w-full'>
        <div className='container mx-auto flex items-center justify-between h-[75px] p-4 md:p-0'>
          <img className='w-40 ml-14' src='./src/assets/logo/logo.png' alt='Logo' />

          <ul className='hidden md:flex justify-between space-x-10  m-auto'>
            {menuList.map((menu, index) => (
              <li key={index}>
                <NavLink
                  to={menu.path}
                  className='text-black hover:text-Primary transition-colors duration-300 text-[18px]'
                  activeClassName='text-[#022278]'
                >
                  {menu.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className='flex items-center ml-auto mr-14 space-x-4 justify-evenly'>
            <div className='w-10 h-9 border-Secondary border rounded-xl flex justify-center items-center'>
              <img className='w-6 h-6' src='.//src/assets/image/englang.png' alt='Language' />
            </div>

            <button
              onClick={() => navigate("/login")}
              className='w-[120px] h-9 bg-Secondary rounded-xl flex justify-center items-center text-white text-[18px]'
            >
              <CiLogin className='mr-2 text-[20px]' />
              Sign In
            </button>

            <button
              onClick={() => navigate('/choose-register')}
              className='w-[120px] h-9 border-Secondary border rounded-xl flex justify-center items-center text-black text-[18px]'
            >
              Sign Up
            </button>

            <div className='flex items-center'>
              <CiLight className='text-[22px] text-Secondary' />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

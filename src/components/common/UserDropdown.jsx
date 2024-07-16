import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const goToDashboard = () => {
    navigate('/dashboard-user');
  };

  return (
    <>
      <div className="flex justify-center pl-4">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="block h-12 w-12 rounded-full overflow-hidden focus:outline-none"
          >
            <img
              className="h-full w-full object-cover"
              src=".//src/assets/image/profile.png"
              alt="avatar"
            />
          </button>
          {isOpen && (
            <div className="absolute right-0 w-40 mt-2 py-2 bg-white border rounded shadow-xl">
              <button
                onClick={goToDashboard}
                className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-Primary hover:text-white w-full text-left"
              >
                Dashboard
              </button>
              <div className="py-2">
                <hr />
              </div>
              <a
                href="#"
                className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-Primary hover:text-white"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

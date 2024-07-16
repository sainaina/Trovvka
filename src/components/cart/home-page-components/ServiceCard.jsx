import React from 'react';

function ServiceCard({ imageUrl, serviceCount }) {
  return (
    <div className="flex my-[50px] mx-[100px] gap-[30px] flex-wrap justify-center">
    <article className="flex mb-[20px] justify-center items-center px-16 py-6 text-lg text-black bg-indigo-200 rounded-2xl shadow-sm max-w-[362px]">
      <div className="flex flex-col items-center w-40 max-w-full">
        <img
          loading="lazy"
          src={".//src/assets/image/education.png"}
          alt={`Service illustration for ${serviceCount} services`}
          className="w-full aspect-[0.98]"
        />
        <p className="mt-8">{serviceCount}23 Service</p>
      </div>
    </article>
    <article className="flex mb-[20px] justify-center items-center px-16 py-6 text-lg text-black bg-indigo-200 rounded-2xl shadow-sm max-w-[362px]">
      <div className="flex flex-col items-center w-40 max-w-full">
        <img
          loading="lazy"
          src={".//src/assets/image/auto.png"}
          alt={`Service illustration for ${serviceCount} services`}
          className="w-full aspect-[0.98]"
        />
        <p className="mt-8">{serviceCount}12 Service</p>
      </div>
    </article>
    <article className="flex mb-[20px] justify-center items-center px-16 py-6 text-lg text-black bg-indigo-200 rounded-2xl shadow-sm max-w-[362px]">
      <div className="flex flex-col items-center w-40 max-w-full">
        <img
          loading="lazy"
          src={".//src/assets/image/restaurant.png"}
          alt={`Service illustration for ${serviceCount} services`}
          className="w-full aspect-[0.98]"
        />
        <p className="mt-8">{serviceCount}22 Service</p>
      </div>
    </article>
    <article className="flex mb-[20px] justify-center items-center px-16 py-6 text-lg text-black bg-indigo-200 rounded-2xl shadow-sm max-w-[362px]">
      <div className="flex flex-col items-center w-40 max-w-full">
        <img
          loading="lazy"
          src={".//src/assets/image/home.png"}
          alt={`Service illustration for ${serviceCount} services`}
          className="w-full aspect-[0.98]"
        />
        <p className="mt-8">{serviceCount}18 Service</p>
      </div>
    </article>
    <article className="flex mb-[20px] justify-center items-center px-16 py-6 text-lg text-black bg-indigo-200 rounded-2xl shadow-sm max-w-[362px]">
      <div className="flex flex-col items-center w-40 max-w-full">
        <img
          loading="lazy"
          src={".//src/assets/image/electronic.png"}
          alt={`Service illustration for ${serviceCount} services`}
          className="w-full aspect-[0.98]"
        />
        <p className="mt-8">{serviceCount}24 Service</p>
      </div>
    </article>

    </div>
  );
}

export default ServiceCard;
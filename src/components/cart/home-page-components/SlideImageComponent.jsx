"use client";

import { Carousel } from "flowbite-react";

const SlideImageComponent = () => {
  return (
    <div className="my-[60px]  mx-[200px] h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img
          src=".//src/assets/image/education2.jpg"
          alt="Slide 1"
          className=""
        />
        <img
          src=".//src/assets/image/education2.jpg"
          alt="Slide 2"
          className=""
        />
        <img
          src=".//src/assets/image/education2.jpg"
          alt="Slide 3"
          className=""
        />
        <img
          src=".//src/assets/image/education2.jpg"
          alt="Slide 4"
          className=""
        />
        <img
          src=".//src/assets/image/education2.jpg"
          alt="Slide 5"
          className=""
        />
      </Carousel>
    </div>
  );
};

export default SlideImageComponent;

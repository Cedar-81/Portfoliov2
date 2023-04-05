import React, { useEffect, useRef } from "react";
import { urlFor } from "../client";
import { BsArrowUpLeft } from "react-icons/bs";

const Workcard = ({ data: { title, subtitle, image, url } }) => {
  const containerStyle = {
    backgroundImage: `url(${urlFor(image).url()})`,
  };

  return (
    <a href={`${url}`}>
      <div
        style={containerStyle}
        className="work_card justify-center cursor-pointer relative md:px-0 max-w-[20rem] h-[24rem] rounded-2xl text-white bg-no-repeat bg-cover bg-center"
      >
        <div className="flex w-full justify-between items-start relative p-4 pt-6 z-10">
          <div className="flex flex-col">
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-base text-gray w-[90%]">{subtitle}</p>
          </div>
          <button className="rounded-full p-2 h-8 w-8 bg-white opacity-90">
            <BsArrowUpLeft className="h-4 w-4 text-orange rotate-90" />
          </button>
        </div>
      </div>
    </a>
  );
};

export default Workcard;

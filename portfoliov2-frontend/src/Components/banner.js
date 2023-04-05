import React from "react";

const Banner = () => {
  return (
    <div className="lg:flex lg:max-w-screen lg:justify-between lg:min-h-screen">
      <div className="xl:mt-12 w-full">
        <div className="w-full lg:flex">
          <div className="w-screen lg:max-w-[50%] flex justify-center items-center flex-col px-[5%] lg:pl-[8%] pt-11 pb-9 lg:block">
            <h1 className="text-2xl xl:text-[3.7rem] font-semibold mx-auto leading-tight lg:mx-0 md:text-[3.3rem]">
              Hi! I am{" "}
              <span className="text-sm w-max rounded-full py-1 lg:py-2 lg:px-4 my-auto mx-auto px-3 bg-blue text-white">
                Web developer
              </span>
              <br /> Divinewisdom.
            </h1>
            <h1 className="text-base lg:text-lg w-[90%] font-normal md:w-[40%] lg:w-[90%] text-center leading-snug mt-3 lg:text-left">
              Digital Designer and Web developer working as a developer for 4
              years now. Specialize in Web design and development.
            </h1>
            <div className="flex mt-7 w-[75%] justify-between md:w-max">
              <a href="mailto: cedarwudnovels@gmail.com" target="_blank">
                <button className="rounded-full w-max px-7 py-2 text-base flex justify-center items-center text-white bg-orange font-medium">
                  Hire Me
                </button>
              </a>
              <a
                href="https://docs.google.com/document/d/17UiuvD80S9IHcs3nKf6OyHEMoRAw2clDq5LJ9be7c18/edit?usp=sharing"
                target="_blank"
              >
                <button className="rounded-full md:ml-10 w-max px-7 py-2 text-base flex justify-center items-center border-2 font-medium">
                  Resume
                </button>
              </a>
            </div>
          </div>

          <div className="w-full">
            <img className=" mx-auto" src="/assets/banner-img.png" />
          </div>
        </div>

        <div className="w-full flex pb-8p">
          <div className="px-[5%] lg:pl-[8%] lg:max-w-[50%]">
            <div className="">
              <h3 className="text-lg font-medium">Hobbies</h3>
              <p className="">Writing, Singing</p>
            </div>

            <div className="mt-9 py-10 lg:flex lg:items-start">
              <div className="">
                <h3 className="text-lg font-medium">Contact</h3>
                <p className="">cedarwudnovels@gmail.com</p>
              </div>
              <div className="flex flex-row-reverse pt-[3.5rem] pb-6 ml-8 lg:flex-row lg:pt-0 lg:pb-0 lg:items-start">
                <img src="/assets/atom.svg" alt="an atom" />
                <p className="text-right mr-2 lg:text-left lg:mr-0 md:w-[40%] lg:ml-2 lg:w-[80%]">
                  UI/UX designer, Graphic Designer and Web developer.
                  Specialized in Web Development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

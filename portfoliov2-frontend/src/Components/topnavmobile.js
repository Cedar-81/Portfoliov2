import React from "react";
import { Link, useLocation } from "react-router-dom";

const Topnavmobile = () => {
  const location = useLocation();
  return (
    <div className="w-screen relative md:h-[4rem] bg-bck_color">
      <div className="md:fixed md:w-full bg-bck_color md:z-20">
        <div className="w-screen md:w-full flex justify-between items-center py-3 z-20 relative px-[5%]">
          <p className="text-xl font-bold">
            Cedar<span className="text-orange">.</span>
          </p>
          <div className="md:flex hidden justify-between w-max gap-8">
            <Link to={"/"} className="text-base font-semibold">
              Home
            </Link>
            {location.pathname == "/" && (
              <>
                <a href={"/#about"} className="text-base font-semibold">
                  About
                </a>
                <a href={"/#work"} className="text-base font-semibold">
                  Works
                </a>
              </>
            )}
            <Link to={"/blog"} className="text-base font-semibold">
              Blog
            </Link>
          </div>
          <a href="mailto: cedarwudnovels@gmail.com">
            <button className="rounded-full px-5 py-2 bg-none border-2 font-medium text-white bg-orange">
              Let's chat
            </button>
          </a>
        </div>
        <ul className="border-b-2 md:block hidden border-b-orange ml-[5%]" />
      </div>
    </div>
  );
};

export default Topnavmobile;

import React, { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleHandler = () => {
    setToggle(!toggle);
    setOpenDrawer(!openDrawer);
  };
  return (
    <header className=" border-bottom relative z-50">
      <div className="  container px-[15px] py-[22px]">
        <div className=" grid grid-cols-12">
          <div className=" col-span-6">
            <a href="">
              <img
                className=" w-[160px]"
                src="https://shtheme.com/demosd/archsan/wp-content/uploads/2023/03/logo.png"
                alt="logo"
              />
            </a>
          </div>
          <div className=" col-span-6  flex justify-end">
            <button onClick={toggleHandler}>
              <div className=" w-[50px] h-[50px] flex flex-col gap-1 justify-center items-end  ">
                <span
                  className={`pointer-events-none block h-[2px] w-[30px] bg-slate-500 duration-300  ${
                    toggle && "rotate-[45deg] translate-y-[6px]"
                  }`}
                ></span>
                <span
                  className={`pointer-events-none block h-[2px] w-[25px] bg-slate-500 duration-200 ${
                    toggle && "  opacity-0"
                  }`}
                ></span>
                <span
                  className={`pointer-events-none block h-[2px] w-[30px] bg-slate-500 duration-300 ${
                    toggle && " rotate-[-45deg] -translate-y-[8px]"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`  w-[340px] bg-white   fixed z-50 top-[96px] right-0 min-h-screen px-[40px] duration-300 ${
          openDrawer && "translate-x-full"
        }`}
      >
        <nav className=" mt-10">
          <ul className=" text-[#777] font-heading text-[15px] uppercase tracking-[.25em]">
            <li className=" mb-[10px] pb-[10px] ">Home</li>
            <li className=" mb-[10px] pb-[10px]">About</li>
            <li className=" mb-[10px] pb-[10px]">Service</li>
            <li className=" mb-[10px] pb-[10px]">Projects</li>
            <li className=" mb-[10px] pb-[10px]">Gallery</li>
            <li className=" mb-[10px] pb-[10px]">Pages</li>
            <li className=" mb-[10px] pb-[10px]">Blog</li>
            <li className=" mb-[10px] pb-[10px]">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from "react";

const LineWrapper = () => {
  return (
    <div className="line-wrapper absolute w-full h-full left-0 overflow-hidden">
      <div className=" line-inner  w-[1140px]  h-full absolute top-0   left-[50%] ml-[-570px] border-l-r ">
        <div className=" center-line h-full absolute left-[33.666666%] right-[33.666666%] border-l-r"></div>
      </div>
    </div>
  );
};

export default LineWrapper;

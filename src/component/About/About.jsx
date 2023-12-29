import React from "react";
import LineWrapper from "../UI/LineWrapper";

const About = () => {
  return (
    <div>
      <div className="relative py-[120px]">
        <div>
          <div className="w-[1140px] grid grid-cols-12 mx-auto">
            <div className="col-span-4 mb-[30px] ps-3 pe-3">
              <div
                className="relative text-xs leading-3 tracking-widest font-normal text-[#1b1b1b] border-bottom 
                 flex items-center pt-[5px] pb-[15px] ps-[15px]"
              >
                {" "}
                <span
                  className="before:content-[''] top-[4o%] block w-[5px] h-[5px] absolute left-0 rounded-full 
                bg-[#c5a47e] "
                ></span>
                ABOUT
              </div>
            </div>

            <div className="col-span-4 mb-[30px] ps-3 pe-3">
              <div className="font-heading text-[#c5a47e] text-4xl font-normal mb-5 leading-6 tracking-wider [word-spacing:5px]">
                ARCSA <span className="text-[#1b1b1b]">ABOUT</span>
              </div>
              <p className=" text-[15px] leading-7 text-[#777] font-normal mb-5">
                Architecture viverra tristique justo duis vitae iaminte neque
                nivamus aestan ateuene artines aringianu the ateliten finibus
                viverra nec lacus in the nedana mis erodino setlie suscipe no
                curabit tristue.
              </p>
              <p className=" text-[15px] leading-7 text-[#777] font-normal mb-5">
                Design nila iman the finise viverra nec a lacus themo the
                seneoice misuscipit non sagie the fermen.
              </p>
              <p className=" text-[15px] leading-7 text-[#777] font-normal mb-5">
                Planner inilla duiman at elit finibus viverra nec a acus themo
                the drudea seneoice misuscipit nonie the fermen miverra the
                ivite dianne onen nivam.
              </p>

              <div className="pt-5 w-full">
                <ul className="flex">
                  <li className="flex items-center">
                    <div>
                      <h1 className="text-6xl text-[#c5a47e] mr-[15px] font-heading font-normal leading-6">
                        24
                      </h1>
                    </div>
                    <div className="text-[15px] leading-6 pt-[5px] text-[#1b1b1b] tracking-wider">
                      YEARS <br />
                      OF EXPERIENCE
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-4">
              <div className="flex flex-wrap pb-[30px] ps-[40px] overflow-hidden">
                <div className="relative inline-block w-full mb-5 align-middle">
                  <img className="h-auto max-w-full"
                    src="https://shtheme.com/demosd/archsan/wp-content/uploads/2023/03/about.jpg"
                    alt=""
                  />

                  <div className="">
                    <h4>STELLA ATHENA</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

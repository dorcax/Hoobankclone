import React from "react";
import { features } from "../constant";
const Features = () => {
  return (
    <div>
      {features.map((feature) => {
      return  <div className="flex hover:bg-[#14101D]   rounded-xl items-center">
            <div className="w-[40px] h-[40px] rounded-full bg-[#09977C1A] flex justify-center items-center   "><img src={feature.icon} alt="icons" srcset=""  className=" w-[20px] object-contain "/></div>
            <div className="px-4 my-4">
                <h2 className="capitalize max-w-[140px]  h-[23px] font-semibold text-lg leading-[24.3px] ">{feature.title}</h2>
                <p className="max-w-sm  font-normal text-md  py-2">{feature.content}</p>
            </div>
        </div>;
      })}
    </div>
  );
};

export default Features;

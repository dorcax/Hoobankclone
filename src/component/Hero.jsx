import React from "react";
import "../index.css"
import { discount,robot } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <div className="flex my-28 w-full  ">
      <div className="flex-1 ">
        <div className="flex items-center bg-discount-gradient rounded-full  px-4  mx-auto  md:mx-0 md:mb-2     w-[388px]">
        <img src={discount} alt="discount img" srcset=""  className="w-[32px] h-[32px]"/>
       <p className=" uppercase text-sm ml-2"> <span className="text-white text-sm ">20% </span>
        Discount for
        <span className="text-white mx-2">1 month</span>
        account</p>
        </div>
      
        <div className=" flex flex-col md:flex-row w-full  py-8 gap-10 ">
          <div className="flex  flex-col ">
          <div className="flex flex-col md:flex-row md:justify-betweween w-full items-center">
         <h1 className="flex-1  text-5xl text-white capitalize leading-[80px] font-semibold ">
            The next <br /><span className="text-gradient">generation</span> 
          </h1>

          <div className="">
            <GetStarted/>
          </div>
             </div>
          <h1 className=" text-5xl text-white capitalize  font-semibold w-full leading-[75px] text-center md:text-start  ">
            payment method .
          </h1>
          <p className="py-2 w-full md:max-w-[400px] text-white text-md md:text-sm font-normal mt-4 text-center md:text-start">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs.We examine annual percentage rates,
            annual fees.
          </p>
        </div>
          
     
      
      {/* </div> */}
        <div className=" hidden md:block relative z-[5]  "><img src={robot} alt="robot hand"  height={674} width={669} />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink-gradient"/>
      <div className="absolute z-[1] w-[80%] h-[80%]  white__gradient rounded-full bottom-40"/>
      <div className="absolute z-[0] w-[50%] h-[50%]  blue__gradient rounded-full right-20 bottom-20"/>
   
   
      </div>
          </div>
      
    </div>
     
    </div>
  );
};

export default Hero;

import React, { useState } from "react";
import { logo } from "../assets";
import { useSearchParams } from "react-router-dom";

const Navbar = () => {
  const[open,setOpen] =useState(false)

  // Hamburger menu
  const handleClick =()=>{
    setOpen(!open)
  }
  return (
    <div className="w-full  h-[40px]">
     
      <nav className="flex   justify-between items-center py-6 text-sm ">
        <div>
          <img src={logo} alt="logo" srcset="" className=" w-[100px] md:w-[82px] " />
        </div>
        <ul className="lg:flex lg:text-[#fff]  sm:hidden capitalize">
          <li className="px-3">home </li>
          <li className="px-3">About us</li>
          <li className="px-3">features</li>
          <li className="px-3">solution</li>
        </ul>
        <div className={open ?"text-white lg:hidden z-[200] text-md text-lg ":"text-white lg:hidden z-[200] text-lg"} onClick={handleClick}>{open ?<i class="fas fa-times  "></i>:<i class="fas fa-bars"></i>}</div>
        <ul className={open ?"flex flex-col items-center justify-center gap-10 py-20  text-[#fff] testimonial h-[500px]   fixed top-0 left-0 w-[250px] capitalize  ease-in-out duration-500 ":"fixed left-[-100%]"}>
          <li className="py-3">home </li>
          <li className="py-3">About us</li>
          <li className="py-3">features</li>
          <li className="py-3">solution</li>
        </ul>
      </nav>
     
    </div>
  );
};

export default Navbar;

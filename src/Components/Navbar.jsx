import React, { useState } from "react";
import Sidebar_Menu from "./Sidebar_Menu";

function Navbar() {
  const [isSidebar, setSideBar] = useState(false);
  const sendSideBar = (event) => {
    console.log("ssss")
    event.preventDefault();
    setSideBar(!isSidebar);
  };
  // console.log(isSidebar);
  return (
    <div className="sticky top-0 z-10">
      <div className="relative ">
        <div className="absolute flex flex-row p-8 px-16 items-center w-[100%]">
          <div className=" w-[10%]">
            <img src="Image/Logo.svg" alt="" className="max-w-[100px]" />
          </div>

          <nav className=" md:font-gotham md:text-sm md:font-semibold md:flex md:w-[100%] md:justify-around py-1 ">
            <ul className="hidden md:visible md:flex md:flex-row md:justify-end md:gap-10 md:w-[100%]">
              <li className="md:px-4 md:py-2 md:transition-all md:ease-in md:duration-300 md:hover:bg-black/5 md:hover:backdrop-blur-3xl md:hover:rounded-md ">
                <a href="">Model S</a>
              </li>
              <li className="md:px-4 md:py-2 md:transition-all md:ease-in md:duration-300 md:hover:bg-black/5 md:hover:backdrop-blur-3xl md:hover:rounded-md ">
                <a href="">Model 3</a>
              </li>
              <li className="md:px-4 md:py-2 md:transition-all md:ease-in md:duration-300 md:hover:bg-black/5 md:hover:backdrop-blur-3xl md:hover:rounded-md ">
                <a href="">Model x</a>
              </li>
              <li className="md:px-4 md:py-2 md:transition-all md:ease-in md:duration-300 md:hover:bg-black/5 md:hover:backdrop-blur-3xl md:hover:rounded-md ">
                <a href="">Model Y</a>
              </li>
              <li className="md:px-4 md:py-2 md:transition-all md:ease-in md:duration-300 md:hover:bg-black/5 md:hover:backdrop-blur-3xl md:hover:rounded-md ">
                <a href="">Solar Roof</a>
              </li>
              <li className="md:px-4 md:py-2 md:transition-all md:ease-in md:duration-300 md:hover:bg-black/5 md:hover:backdrop-blur-3xl md:hover:rounded-md ">
                <a href="">Solar Panels</a>
              </li>
            </ul>
            <ul className="flex flex-row  w-[50%] justify-end gap-10">
              <li className="px-4 py-2 hover:bg-black/5 hover:backdrop-blur-3xl  hover:rounded-md">
                <a href="">Shop</a>
              </li>
              <li className="md:px-4 md:py-2 md:transition-all md:ease-in md:duration-300 md:hover:bg-black/5 md:hover:backdrop-blur-3xl md:hover:rounded-md ">
                <a href="">Account</a>
              </li>
              <li
                onClick={sendSideBar}
                className="md:px-4 md:py-2 md:transition-all md:ease-in md:duration-300 md:hover:bg-black/5 md:hover:backdrop-blur-3xl md:hover:rounded-md "
              >
                <a href="">Menu</a>
              </li>
              
            </ul>
          </nav>
        </div>
        {isSidebar && <Sidebar_Menu isSidebar={isSidebar} sendSideBar={sendSideBar} />}
      </div>
    </div>
  );
}

export default Navbar;


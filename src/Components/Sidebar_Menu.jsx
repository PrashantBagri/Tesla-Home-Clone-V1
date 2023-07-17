import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

function Sidebar_Menu(props) {
  return (
    <>
      <div
        onClick={props.sendSideBar}
        className={`h-screen w-[100%] ${props.isSidebar ? "backdrop-blur-lg" : "hidden"
        } absolute`}
      ></div>
      <div
        className={`fixed   h-screen w-72 bg-white right-0 flex  justify-center transition-transform duration-700 ease-in-out ${props.isSidebar ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col  justify-right mt-[15%] leading-9 ">
          <li className="p-2 ml-40  ">

            <button onClick={props.sendSideBar}>
              <RxCross2 />
            </button>
          </li>
          <li className="font-gotham text-sm font-semibold p-2">Insurance</li>
          <li className="font-gotham text-sm font-semibold p-2">Demo Drive</li>
          <li className="font-gotham text-sm font-semibold p-2">Careers</li>
          <li className="font-gotham text-sm font-semibold p-2">Find Us</li>
          <li className="font-gotham text-sm font-semibold p-2">Events</li>
          <li className="font-gotham text-sm font-semibold p-2">Support</li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar_Menu;


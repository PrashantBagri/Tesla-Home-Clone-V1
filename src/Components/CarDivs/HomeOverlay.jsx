import React from "react";

function HomeOverlay(props) {
  
  // let carOverlay=props.carDivData;

  // console.log(carOverlay)
  

  return (
    <>
      <div className="absolute">
        <div className="flex items-center justify-center flex-col  w-screen h-screen font-gotham">
          <div className="absolute top-[20%] flex flex-col ">
            <div className=" text-5xl font-bold">
              <h1>{props.Heading}</h1>
            </div>
            <div className="flex justify-center">
              <p className="text-md transition ease-in-out duration-500">{props.subtitle}</p>
            </div>
          </div>
          <div className="absolute bottom-[15%] flex flex-col gap-4 sm:flex-row text-sm">
            <button className="bg-[#171a20] text-[#f4f4f4] backdrop-blur px-[30vw] py-[1.5vh] md:px-[8.5vw] md:py-[0.8vh] sm:px-[12.5vw] sm:py-[1vh] font-semibold">Order Now</button>
            <button className="bg-[#f4f4f4] text-[#171a20] backdrop-blur px-[30vw] py-[1.5vh] md:px-[8.5vw] md:py-[0.8vh] sm:px-[12.5vw] sm:py-[1vh] font-semibold">Demo Drive</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeOverlay;

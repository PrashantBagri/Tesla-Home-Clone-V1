import React from "react";
import HomeOverlay from "./HomeOverlay";
import Data from './Data/Data.json';


function ModelX(props) {
  const carDivContent = Data;
  let modelIndex = null;
  carDivContent.map((carDiv , index)=>{
    if(carDiv.Heading=="Model X"){
        modelIndex = index;
    }
  })
  return (
    <>
      <div className="snap-start">
        <picture className="relative">
          <source
            media="(min-width: 960px)"
            srcSet="Image\Bg-Images\ModelX-Img\modelXHome-Desktop.avif"
          />
          <source
            media="(min-width: 640px)"
            srcSet="Image\Bg-Images\ModelX-Img\modelXHome-Tablet.avif"
          />

          <img
            src="Image\Bg-Images\ModelX-Img\modelXHome-Mobile.avif"
            alt=""
            className="object-cover h-screen w-screen object-top sm:object-center"  
          />
          <div className="absolute inset-0">
          <HomeOverlay Heading={carDivContent[modelIndex].Heading} subtitle={carDivContent[modelIndex].subtitle}/>
          </div>
        </picture>
      </div>
    </>
  );
}

export default ModelX;

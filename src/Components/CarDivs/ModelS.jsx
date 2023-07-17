import React from "react";
import HomeOverlay from "./HomeOverlay";
import Data from './Data/Data.json';


function ModelS(props) {
  const carDivContent = Data;
  let modelIndex = null;
  carDivContent.map((carDiv , index)=>{
    if(carDiv.Heading=="Model S"){
        modelIndex = index;
    }
  })
  return (
    <>
      <div className="snap-start">
        <picture className="relative">
          <source
            media="(min-width: 960px)"
            srcSet="Image\Bg-Images\ModelS-Img\modelSHome.avif"
          />
          <source
            media="(min-width: 640px)"
            srcSet="Image\Bg-Images\ModelS-Img\modelSHome-Tablet.avif"
          />

          <img
            src="Image\Bg-Images\ModelS-Img\modelSHome-Mobile.avif"
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

export default ModelS;

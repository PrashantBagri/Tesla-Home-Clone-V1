import React from "react";
import HomeOverlay from "./HomeOverlay";
import Data from './Data/Data.json';

function Model3() {

  const carDivContent = Data;
  let modelIndex = null;
  carDivContent.map((carDiv , index)=>{
    if(carDiv.Heading=="Model 3"){
        modelIndex = index;
    }
  })

  return (
    <div className="snap-start">
      <picture className="relative">
        <source
          media="(min-width: 960px)"
          srcSet="Image\Bg-Images\Model3-Img\model3Home.avif"
        />
        <source
          media="(min-width: 640px)"
          srcSet="Image\Bg-Images\Model3-Img\model3Home-Tablet.avif"
        />
        <img
          src="Image\Bg-Images\Model3-Img\model3Home-mobile.avif"
          alt=""
          className="object-cover h-screen w-screen"
        />
         <div className="absolute inset-0">
            <HomeOverlay Heading={carDivContent[modelIndex].Heading} subtitle={carDivContent[modelIndex].subtitle}/>
          </div>
      </picture>
    </div>
  );
}

export default Model3;

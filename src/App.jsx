import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Model3 from "./Components/CarDivs/Model3";
import ModelY from "./Components/CarDivs/ModelY";
import ModelS from "./Components/CarDivs/ModelS";
import ModelX from "./Components/CarDivs/ModelX";
import Sidebar_Menu from "./Components/Sidebar_Menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <div className="relative">
        <Sidebar_Menu />
      </div>
      <section className=" snap-mandatory snap-y h-screen w-screen overflow-scroll overflow-x-hidden ">
        <Model3 />
        <ModelY />
        <ModelS />
        <ModelX />
      </section>
    </>
  );
}

export default App;

"use client";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import "./css/style.css";

export default function Home() {
  const [activeMailId, setActiveMailId] = useState<number>(0);

  return (
    <div id="outer">
      <div id="middle">
        <div id="innerContainer">
        <div id="mainContainer">
          <Sidebar
            activeMailId={activeMailId}
            setActiveMailId={setActiveMailId}
          />
          <Content id={activeMailId} />
        </div>
        <div id="innerPart"><div id="smallInnerPart"></div></div>
        </div>
      </div>
    </div>
  );
}

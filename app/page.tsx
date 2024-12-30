"use client";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Contacts from "./components/Contacts";
import Text from "./components/Text";
import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import "./css/style.css";

export default function Home() {
  const [activeMailId, setActiveMailId] = useState<number>(0);
  const [showContacts, setShowContacts] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width! < 1000) setIsMobile(true);
    else setIsMobile(false);
  }, [size]);

  return (
    <div id="outer">
      <div id="middle">
        <div id="innerContainer">
          {isMobile ? (
            <div id="mainContainer">
              {showContacts ? (
                <span onClick={() => setShowContacts(false)}>
                  <Contacts
                    activeMailId={activeMailId}
                    setActiveMailId={setActiveMailId}
                  />
                </span>
              ) : (
                <span onClick={() => setShowContacts(true)}>
                  <Text id={activeMailId} setShowContacts={setShowContacts} />
                </span>
              )}
            </div>
          ) : (
            <div id="mainContainer">
              <Sidebar
                activeMailId={activeMailId}
                setActiveMailId={setActiveMailId}
              />
              <Content id={activeMailId} />
            </div>
          )}
          <div id="innerPart">
            <div id="smallInnerPart"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

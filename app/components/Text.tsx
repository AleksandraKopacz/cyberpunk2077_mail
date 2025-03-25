import Mail from "../data/mail.json";
import {
  TbArrowBadgeLeft,
  TbChevronRight,
} from "react-icons/tb";
import { Dispatch, SetStateAction } from "react";

import "../css/style.css";

export default function Text({
  id,
  setShowContacts,
}: {
  setShowContacts: Dispatch<SetStateAction<boolean>>;
  id: number;
}) {
  return (
    <div id="mailContainer">
      <span onClick={() => setShowContacts(true)}>
        <TbArrowBadgeLeft className="icon" size={15} />
        <span>{Mail[id].from}</span>
        <TbChevronRight size={15} className="icon" />
        <span>{Mail[id].to}</span>
      </span>
      <div id="data">
        <h2 className="mailTitle">{Mail[id].title}</h2>
        <hr className="divide" />
      </div>
      <div id="content">{Mail[id].content}</div>
    </div>
  );
}

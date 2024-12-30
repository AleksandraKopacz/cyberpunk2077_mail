import Mail from "../data/mail.json";
import { TbUser, TbUserHexagon, TbArrowBadgeLeft } from "react-icons/tb";
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
        <TbArrowBadgeLeft onClick={() => setShowContacts(true)} />
      <div id="data">
        <h2 className="mailTitle">{Mail[id].title}</h2>
        <p>
          <span className="fromto">Od:</span> <TbUser />{" "}
          <span>{Mail[id].from}</span>
        </p>
        <p>
          <span className="fromto">Do:</span> <TbUserHexagon />{" "}
          <span>{Mail[id].to}</span>
        </p>
        <hr className="divide" />
      </div>
      <div id="content">{Mail[id].content}
      </div>
    </div>
  );
}

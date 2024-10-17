import Mail from "../data/mail.json";
import { Dispatch, SetStateAction } from "react";
import "../css/style.css";

export default function Sidebar({
  activeMailId,
  setActiveMailId,
}: {
  setActiveMailId: Dispatch<SetStateAction<number>>;
  activeMailId: number;
}) {
  return (
    <div id="sidebarContainer">
      {Mail.map((mail) => (
        <div
        id="bigMailInfoContainer"
        key={mail.id}>
        <div
          id="mailInfoContainer"
          key={mail.id}
          className={mail.id === activeMailId ? "active" : "inactive"}
          onClick={() => setActiveMailId(mail.id)}
        >
          <p>{mail.title}</p>
          <p>{mail.from}</p>
        </div></div>
      ))}
    </div>
  );
}

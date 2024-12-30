import Mail from "../data/mail.json";
import { Dispatch, SetStateAction } from "react";
import "../css/style.css";

export default function Contacts({
  activeMailId,
  setActiveMailId,
}: {
  setActiveMailId: Dispatch<SetStateAction<number>>;
  activeMailId: number;
}) {
  return (
    <div id="contactsContainer">
      {Mail.map((mail) => (
        <div id={mail.id === activeMailId ? "bigContactInfoContainerActive" : "bigContactInfoContainer"} key={mail.id}>
          <div
            id={mail.id === activeMailId ? "contactInfoContainerActive" : "contactInfoContainer"}
            key={mail.id}
            onClick={() => setActiveMailId(mail.id)}
          >
            <p>{mail.title}</p>
            <p>{mail.from}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

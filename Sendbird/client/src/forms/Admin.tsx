import { useState } from "react";
import Message from "../components/general/Message";
import { GetUserMode } from "../functions/UserMode";
import BlueButton from "../components/general/BlueButton";

function Admin() {
  const isMobile = GetUserMode();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  if (isMobile) {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">
          This is the MOBILE Admin page
        </h1>
        <h2>example</h2>
        <Message />
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">
          This is the DESKTOP Admin page
        </h1>
        <BlueButton buttonText="Toggle" onClickFunction={toggleMenu}/>
        {isOpen ? <h1>Menu is open!</h1> : null}
        <h2>example</h2>
        <Message />
      </div>
    );
  }
}

export default Admin;

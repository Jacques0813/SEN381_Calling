import Message from "../components/general/Message";

import { GetUserMode } from "../functions/UserMode";

function CallCentre() {
  const isMobile = GetUserMode();

  if (isMobile) {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">
          This is the MOBILE CallCentre page
        </h1>
        <Message />
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">
          This is the DESKTOP CallCentre page
        </h1>
        <Message />
      </div>
    );
  }
}

export default CallCentre;

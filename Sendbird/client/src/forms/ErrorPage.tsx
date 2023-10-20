import { GetUserMode } from "../functions/UserMode";

function ErrorPage() {
  const isMobile = GetUserMode();

  if (isMobile) {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">
          This is the MOBILE Error Page
        </h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-3xl font-bold underline">
          This is the DESKTOP Error Page
        </h1>
      </div>
    );
  }
}

export default ErrorPage;

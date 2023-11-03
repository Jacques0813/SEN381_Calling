import Message from "../components/general/Message";
import { GetUserMode } from "../functions/UserMode";
import Navbar from "../components/general/Navbar";
import Headings from "../components/general/Headings";
import BlueButton from "../components/general/BlueButton";
import SendBirdCall from "sendbird-calls";

function Client() {
  const isMobile = GetUserMode();

  function SendbirdClient() {
    SendBirdCall.useMedia({ audio: true, video: true });

    const authOption = {
      userId: "CLIENT01",
      accessToken: "f0d27fc2059367a64d1d080407e1da6fd658d5e8",
    };

    SendBirdCall.authenticate(authOption, (result, error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Successfully authenticated!");
        SendBirdCall.connectWebSocket()
          .then(() => {
            console.log("Connected to websocket");
            const dialParams = {
              userId: "EMP01",
              isVideoCall: true,
              callOption: {
                localMediaView: document.getElementById(
                  "local_video_element_id"
                ) as HTMLMediaElement,
                remoteMediaView: document.getElementById(
                  "remote_video_element_id"
                ) as HTMLMediaElement,
                audioEnabled: true,
                videoEnabled: true,
              },
            };

            const call = SendBirdCall.dial(dialParams, (call, error) => {
              if (error) {
                console.log(error);
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }

  return (
    <div>
      <Navbar />
      <BlueButton buttonText="Login Client" onClickFunction={SendbirdClient} />
      <h1 className="text-3xl font-bold underline">Local video</h1>
      <video id="local_video_element_id" className="" autoPlay muted></video>
      <h1 className="text-3xl font-bold underline">Remote video</h1>
      <video id="remote_video_element_id" autoPlay></video>
    </div>
  );
}

export default Client;

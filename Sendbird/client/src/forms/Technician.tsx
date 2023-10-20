import BlueButton from "../components/general/BlueButton";
import Message from "../components/general/Message";

import { GetUserMode } from "../functions/UserMode";
import SendBirdCall from 'sendbird-calls';

function Technician() {
  const isMobile = GetUserMode();

  function SendbirdEmp() {
    const authOption = { userId: "EMP01", accessToken: "516b9530358fbefa1409d669a5275e9dadbae414" };

    SendBirdCall.authenticate(authOption, (result, error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Successfully authenticated!");
                // Establishing websocket connection.
          SendBirdCall.connectWebSocket()
          .then(
            () =>{
              console.log("Connected to websocket");
            }
          )
          .catch(
            (error) => {
              console.log(error);
            }
          );
        }
    });

    SendBirdCall.addListener("EMP_HANDLER_01", {
      onRinging: (call) => {
          call.onEstablished = (call) => {
              //...
          };
  
          call.onConnected = (call) => {
              //...
          };
  
          call.onEnded = (call) => {
              //...
          };
  
          call.onRemoteAudioSettingsChanged = (call) => {
              //...
          };
  
          call.onRemoteVideoSettingsChanged = (call) => {
              //...
          };
  
          const acceptParams = {
              callOption: {
                  localMediaView: document.getElementById('local_video_element_id') as HTMLMediaElement,
                  remoteMediaView: document.getElementById('remote_video_element_id') as HTMLMediaElement,
                  audioEnabled: true,
                  videoEnabled: true
              }
          };
  
          call.accept(acceptParams);
      }
  });
  }

  function getTC() {
    fetch('http://localhost:3000/Api')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        console.log(data); // Log the JSON response
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  return (
    <div>
      <BlueButton buttonText="Login Client" onClickFunction={SendbirdEmp}/>
      <h1 className="text-3xl font-bold underline">
        Local video
      </h1>
      <video id="local_video_element_id" className="" autoPlay muted></video>
      <h1 className="text-3xl font-bold underline">
        Remote video
      </h1>
      <video id="remote_video_element_id" autoPlay></video>
    </div>
  );
}

export default Technician;

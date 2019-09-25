import request from "./request";

const onLoad = () => {
  try {
    // const sessionStorage = window.sessionStorage;
    // const code = Math.round(Math.random() * 10000);

    // const sessionKey = `${window.nuoAppTrackId}_id`;
    // const track_session_id = getSessionId();

    window.addEventListener("load", function() {
      // if (!sessionStorage.getItem(sessionKey)) {
      //   sessionStorage.setItem(sessionKey, track_session_id);

      request();
      // }
    });
  } catch (error) {
    request();
  }
};

export default onLoad;

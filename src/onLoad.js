import request from "./request";

const onLoad = () => {
  try {
    const sessionStorage = window.sessionStorage;
    let timer = +new Date();

    const { pathname } = location || {};

    const sessionKey = (pathname || "") + "bnVvVHJhY2slMEE=";

    window.addEventListener("load", function() {
      if (!sessionStorage.getItem(sessionKey)) {
        request();

        sessionStorage.setItem(sessionKey, timer);
      }
    });
  } catch (error) {
    request();
  }
};

export default onLoad;

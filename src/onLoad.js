import request from "./request";

const onLoad = () => {
  try {
    const sessionStorage = window.sessionStorage;
    let timer = +new Date();
    request();

    window.addEventListener("load", function() {
      if (!sessionStorage.getItem("bnVvVHJhY2slMEE=")) {
        request();

        sessionStorage.setItem("bnVvVHJhY2slMEE=", timer);
      }
    });
  } catch (error) {
    request();
  }
};

export default onLoad;

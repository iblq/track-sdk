import request from "./request";

const onLoad = () => {
  const sessionStorage = window.sessionStorage;
  let timer = +new Date();

  window.addEventListener("load", function() {
    if (!sessionStorage.getItem("bnVvVHJhY2slMEE=")) {
      request();

      sessionStorage.setItem("bnVvVHJhY2slMEE=", timer);
    }
  });
};

export default onLoad;

import request from './request';

const onLoad = () => {
  try {
    window.addEventListener('load', function() {
      request();
    });
  } catch (error) {
    request();
  }
};

export default onLoad;

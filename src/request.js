const formatParams = (url, data) => {
  let resUrl = `${url}?`;

  Object.entries(data).forEach(([key, value]) => {
    resUrl = `${resUrl}${key}=${encodeURIComponent(value)}&`;
  });
  return resUrl;
};

const URL = "/xxx/xxxs";

const request = (data = {}, callback = () => {}, timer = +new Date()) => {
  const { userId, appId } = data;
  const params = { userId: userId || timer, appId };
  const resUrl = formatParams(data.url || URL, params);
  console.log("post track", resUrl);
  // return;

  const ajax = new XMLHttpRequest();
  ajax.onreadystatechange = () => {
    if (ajax.readyState === 4 && ajax.status === 200) {
      // const msg = ajax.responseText;
      callback();
    }
  };
  ajax.open("get", resUrl);
  // ajax.setRequestHeader('content-type', 'application/json');
  ajax.withCredentials = true;

  ajax.send(JSON.stringify(data));
};

export default request;

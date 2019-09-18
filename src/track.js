const formatParams = (url, data) => {
  let resUrl = `${url}?`;

  Object.entries(data).forEach(([key, value]) => {
    resUrl = `${resUrl}${key}=${encodeURIComponent(value)}&`;
  });
  return resUrl;
};

const request = (url, data, callback) => {
  const resUrl = formatParams(url, data);
  console.log(document.cookie);
  console.log('post track', resUrl);

  // const ajax = new XMLHttpRequest();
  // ajax.onreadystatechange = () => {
  //   if (ajax.readyState === 4 && ajax.status === 200) {
  //     // const msg = ajax.responseText;
  //     callback();
  //   }
  // };
  // ajax.open('get', resUrl);
  // // ajax.setRequestHeader('content-type', 'application/json');
  // xhr.withCredentials = true;

  // ajax.send(JSON.stringify(data));
};

const URL = '/xxx/xxxs';

const nuoTrack = (config = {}, callback) => {
  // appId, userId
  const { appId, userId } = config;

  request(URL, { appId, userId }, callback);
};

export default nuoTrack;

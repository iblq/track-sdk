const formatUrl = (url, data) => {
  const _url = url + (url.indexOf("?") === -1 ? "?" : "&");
  let ret = "";
  if (typeof data === "string") {
    ret = data;
  } else if (typeof data === "object") {
    Object.keys(data).forEach(key => {
      ret += `&${key}=${data[key]}`;
    });
  }
  ret = ret.substr(1);
  return _url + ret;
};

const removeElem = elem => {
  const parent = elem.parentNode;
  if (parent && parent.nodeType !== 11) {
    parent.removeChild(elem);
  }
};

const jsonp = (config = {}) => {
  const { data, url, callback } = config;

  // 拼接请求Url
  let name = `id_${new Date().getTime()}_${Math.random()
    .toString()
    .substr(2)}`;

  const srcUrl = formatUrl(url, {
    ...data,
    callback: name
  });

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = srcUrl;
  script.id = name;

  window[name] = json => {
    window[name] = undefined;
    const elem = document.getElementById(name);
    removeElem(elem);
    callback && typeof callback === "function" && callback(json || "success");
  };

  const head = document.getElementsByTagName("head");
  if (head && head[0]) {
    head[0].appendChild(script);
  }
};

export default jsonp;

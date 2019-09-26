import jsonp from "./jsonp";
// import encrypt from "./encrypt";

const sessionStorage = window.sessionStorage;

const getSessionKey = () => `${window.nuoAppTrackId}`;

const getSessionId = () => {
  const sessionKey = getSessionKey();

  // 重复加载，不再保存
  if (sessionStorage.getItem(sessionKey)) {
    return sessionStorage.getItem(sessionKey);
  }

  let timer = +new Date();
  const code = Math.round(Math.random() * 10000);

  window.track_session_id =
    window.track_session_id || `${sessionKey}-${timer}${code}`;

  // 标记已有 sessionId
  sessionStorage.setItem(sessionKey, window.track_session_id);

  // 生成 会话 id
  return window.track_session_id;
};

const URL = "//data.jss.com.cn/statisticsApi/statistics/sendStatisticsData.do";
// "//uvstest.nntest.cn/statisticsApi/statistics/sendStatisticsData.do";
// "http://192.168.206.215:8099/statisticsApi/statistics/sendStatisticsData.do";
// "http://172.30.5.47:8099/statisticsApi/statistics/sendStatisticsData.do";

const request = (data = {}, callback = () => {}) => {
  try {
    const { userId, appId } = data;
    const sessionKey = getSessionKey();

    const params = {
      appId: appId || window.nuoAppTrackId
    };

    if (userId) {
      params.userId = userId;

      params.appObject = getSessionId();

      const timer = +new Date();

      const session_user_Key = `${params.appId}_${userId}`;

      // 没有已标记的 session_user_Key 时，生成标记，并发送请求
      if (!sessionStorage.getItem(session_user_Key)) {
        sessionStorage.setItem(session_user_Key, timer);

        jsonp({ url: URL, data: params, callback });
      }
    } else {
      // 没有已标记的 sessionkey 时，生成标记，并发送请求
      if (!sessionStorage.getItem(sessionKey)) {
        params.appObject = getSessionId();

        jsonp({ url: URL, data: params, callback });
      }
    }
  } catch (err) {
    console.log("track error");
  }
};

export default request;

import jsonp from "./jsonp";

const URL =
  "http://192.168.206.215:8099/statisticsApi/statistics/sendStatisticsData.do";
// "http://172.30.5.47:8099/statisticsApi/statistics/sendStatisticsData.do";

const request = (data = {}, callback = () => {}) => {
  try {
    const { userId, appId } = data;
    const params = {
      appId: appId || window.nuoAppTrackId
    };

    if (userId) {
      params.userId = userId;
    }

    jsonp({ url: URL, data: params, callback });
  } catch (err) {
    console.log("track off");
  }
};

export default request;

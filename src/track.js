import request from "./request";
import onLoad from "./onLoad";

onLoad();

/**
 * @param {Object} config params
 * @param {String} config.appId app key
 * @param {String} config.userID solo key
 
 * @param {Function} callback 
 */
const nuoTrack = (config = {}, callback) => {
  request(config, callback);
};

export default nuoTrack;

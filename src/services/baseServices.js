import axios from "axios";
import Config from "../../public/js/config";
const baseURL = Config.getConfig().Server + "api";
let BaseServices = {
  async get(endpoint, params, headers) {
    let response = await axios.get(baseURL + endpoint, {
      params: params,
      headers: headers,
    });
    return response;
  },
  async getCaptch(endpoint, params, headers) {
    let response = await axios.get(endpoint, {
      params: params,
      headers: headers,
    });
    return response;
  },
  async post(endpoint, data, headers) {
    let response = await axios.post(baseURL + endpoint, data, {
      headers: headers,
    });
    return response;
  },
 
  async postForm(endpoint, params = null, image = null, headers = null) {
    var bodyFormData = new FormData();
    for (var a in params) {
      bodyFormData.set(a, params[a]);
    }
    if (image) {
      bodyFormData.append("file", image);
    }
    if (!headers) headers = {};
    headers["Content-Type"] = "multipart/form-data";
    let response = await axios.post(baseURL + endpoint, bodyFormData, {
      headers: headers,
    });
    return response;
  },
  getDomain() {
    // return "sabz"
    var domain = window.location.host.split(".")[0];
    if (domain == "www") {
      domain = window.location.host.split(".")[1];
    }
    return domain;
  },
};
export default BaseServices;

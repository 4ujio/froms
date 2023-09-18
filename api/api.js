import axios from "axios";

axios.defaults.timeout = 30000;
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

if (process.env.VUE_APP_MODE === "development") {
  console.log("开发");
} else if (process.env.VUE_APP_MODE === "test") {
  console.log("测试");
} else {
  console.log("正式");
}
// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export function apiGet(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
        headers: { token: sessionStorage.getItem("token") },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

export function apiPost(url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: url,
      data: params,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

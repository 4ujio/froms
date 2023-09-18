import { apiPost, apiGet } from "./api";

//登录
export function postLOgin(data) {
  return new Promise((resolve, reject) => {
    apiPost("/index.php/index/index/login", data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
//获取登录验证码
export function getCode() {
  return new Promise((resolve, reject) => {
    apiGet("/index.php/index/index/getcode")
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

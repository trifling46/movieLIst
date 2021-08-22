/**
 * @Description:
 * @author shengling li
 * @date: 2021-08-22 11:16
 */
import axios from "axios";

const http =  axios.create({
  timeout: 3000,
  headers: {
    Host: 'm.douban.com',
    Referer: 'https://m.douban.com/movie/'
  }
});
http.interceptors.response.use(function (response) {
  console.log(response)
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default http

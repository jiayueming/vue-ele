/**
 * Created by demain on 2017/11/13.
 */
/* eslint-disable */
import Vue from 'Vue'
import axios from 'axios'
import qs from 'qs'
let protocol = window.location.protocol === 'https:' ? 'https:' : 'http:'
let testHost = protocol + '' // 测试
Vue.prototype.$http = axios

// 拦截请求
axios.interceptors.request.use(function (config) {
  // Toast.loading('加载中', 0);
  return config
})

// 拦截相应
axios.interceptors.response.use(function (config) {
  // Toast.hide();
  return config
})
const NetWorkUtils = {
  /**
   * GET 请求
   * @param url
   * @returns {Promise}
   */
  get: function (url) {
    url = url.indexOf('http') < 0 ? testHost + url : url
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then((res) => {
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
    })
  },
  /**
   * post 请求
   * @param url
   * @param params
   * @returns {Promise}
   */
  post: function (url, params) {
    url = url.indexOf('http') < 0 ? testHost + url : url
    return new Promise((resolve, reject) => {
      axios.post(
        url,
        qs.stringify(params), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      ).then((res) => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default NetWorkUtils

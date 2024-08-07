import axios from 'axios';
import lodash from '@/assets/js/plugins/lodash';
import qs from "qs";

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    if (error.response && error.response.status === 401) {
      alert(process.env.VUE_APP_AUTH_ERROR_MESSAGE)
    } else if (error.response && error.response.status === 403) {
      alert(process.env.VUE_APP_ACCESS_ERROR_MESSAGE)
    } else if (error.response && error.response.status === 404) {
      alert(process.env.VUE_APP_API_ERROR_MESSAGE)
    } else if (error.response && error.response.status === 500) {
      alert(process.env.VUE_APP_SERVER_ERROR_MESSAGE)
    } else {
      alert(process.env.VUE_APP_GENERAL_ERROR_MESSAGE)
    }
    return Promise.reject(error);
  });
  
  // Add a response interceptor
  axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response.data = lodash.methods.snakeToCamel(response.data)

    if(response.config.method == "post" && response.status == 200 && response.data == 'insert') alert(process.env.VUE_APP_API_SAVE_MESSAGE)

    if(response.config.method == "post" && response.status == 200 && response.data == 'delete') alert(process.env.VUE_APP_API_DELETE_MESSAGE)
      
    return response;
  }, function (error) {
    if (error.response && error.response.status === 401) {
      alert(process.env.VUE_APP_AUTH_ERROR_MESSAGE)
    } else if (error.response && error.response.status === 403) {
      alert(process.env.VUE_APP_ACCESS_ERROR_MESSAGE)
    } else if (error.response && error.response.status === 404) {
      alert(process.env.VUE_APP_API_ERROR_MESSAGE)
    } else if (error.response && error.response.status === 500) {
      alert(process.env.VUE_APP_SERVER_ERROR_MESSAGE)
    } else {
      alert(process.env.VUE_APP_GENERAL_ERROR_MESSAGE)
    }
    return Promise.reject(error);
  });

  function getApi(url, params) {
    return axiosInstance.get(url, {
      params: params,
      paramsSerializer: params => {
      return qs.stringify(params, { arrayFormat : 'brackets' })
    }})
  }

  function postApi(url, param) {
    return axiosInstance.post(url, param)
  }


export default axiosInstance
export {
  getApi,
  postApi
}
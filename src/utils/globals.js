import serviceUrls from './hp-service-urls';

// const BASE_URL = window.apiHost;
const PATIENT_PORT = 'http://34.132.195.252';
// const assetsSubPath = 'static/assets/';
const API_PREFIX = 'api/v1';
// const ACCESS_KEY = 'access_token';

const globals = {
    serviceUrls: serviceUrls,
    headers: {},
    breakpoints: {
      mobile: '1024',
      tablet: '1024',
      desktop: '1440',
    },
    
    getHeaders() {
    //   if (this.getCookie(ACCESS_KEY)) {
    //     this.headers.Authorization = `${'Bearer'} ${this.getCookie(ACCESS_KEY)}`;
    //   }
      return this.headers;
    },
    getRestUrl(endPoint) {
      let url = '';
      url = `${PATIENT_PORT}/${API_PREFIX}/${this.serviceUrls[endPoint]}`;
      return url;
    },
    getUrlParam(paramKey) {
      const str = window.location.search;
      const objURL = {};
      str.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), ($0, $1, $2, $3) => {
        objURL[$1] = $3;
      });
      return objURL[paramKey];
    },
  
    replaceParamValue(paramKey, newParamValue) {
      const str = window.location.search;
      const objURL = {};
      str.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), ($0, $1, $2, $3) => {
        objURL[$1] = $3;
      });
  
      objURL[paramKey] = newParamValue;
      let updatedURL = `${window.location.origin}${window.location.pathname}`;
      Object.keys(objURL).forEach((param, i) => {
        if (i === 0) {
          updatedURL = updatedURL.concat(`?${param}=${objURL[param]}`);
        } else {
          updatedURL = updatedURL.concat(`&${param}=${objURL[param]}`);
        }
      });
      return updatedURL;
    },
    setCookie(name, value, days, isSecure) {
      let expires = '';
      if (days) {
        const date = new Date();
        const daysVal = date.getTime() + days;
        date.setTime(daysVal * 24 * 60 * 60 * 1000);
        expires = `; expires=${date.toUTCString()}`;
      }
      const secure = isSecure ? 'Secure;' : '';
      document.cookie = `${name}=${value}${expires}; ${secure} path=/`;
    },
    getCookie(key) {
      const v = document.cookie.match(`(^|;) ?${key}=([^;]*)(;|$)`);
      return v ? v[2] : null;
    },
    deleteCookie(key) {
      this.setCookie(key, '', -1);
    },
    // Set the storage
    setStorage(key, value) {
      localStorage.setItem(key, value);
    },
    // get the storage
    getStorage(key) {
      return localStorage[key];
    },
    // delete from storage
    deleteStorage(key) {
      localStorage.removeItem(key);
    },
    setSessionStorage(key, value) {
      sessionStorage.setItem(key, value);
    },
    getSessionStorage(key) {
      return sessionStorage[key];
    },
    deleteSessionStorage(key) {
      if (this.getSessionStorage(key)) {
        sessionStorage.removeItem(key);
      }
    },
    isObjectProperty(obj, attr) {
      return Object.prototype.hasOwnProperty.call(obj, attr);
    },

  };
  export default globals;
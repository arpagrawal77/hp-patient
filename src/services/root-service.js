/**
 * root-service is a service file
 * for all the type of methods to make API calls.
 */
// More details regarding config object can be found on https://github.com/axios/axios
import axios from 'axios';
import globals from '../utils/globals';


class RootService {
  constructor() {
    const headerData = globals.getHeaders() || {};
    const service = axios.create({
      headers: headerData,
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
    this.defaultLocale = 'en';
  }
  /**
   * success handler.
   * @param {object} response
   */
  static handleSuccess(response) {
    return response;
  }

  /**
   * error handler.
   * @param {object} error
   */
  static handleError(error) {
    return error;
  }

  /**
   * generateRequest is method to make the api request.
   * @param {object} requestConfig
   * @param {function} successCallback
   * @param {function} errorCallback
   */
  generateRequest(requestConfig, successCallback, errorCallback) {
    const config = requestConfig;
    config.timeout = 60000;

    return this.service(config).then(
      response => successCallback(response),
      (error) => errorCallback(error),
    );
  }
  /**
   * delete method.
   * @param {object} requestConfig
   * @param {function} successCallback
   * @param {function} errorCallback
   */
  delete(requestConfig, successCallback, errorCallback) {
    const config = requestConfig;
    config.method = 'delete';
    this.generateRequest(config, successCallback, errorCallback);
  }
  /**
   * get method.
   * @param {object} requestConfig
   * @param {function} successCallback
   * @param {function} errorCallback
   */
  get(requestConfig, successCallback, errorCallback) {
    const config = requestConfig;
    config.method = 'get';
    this.generateRequest(config, successCallback, errorCallback);
  }

  /**
   * patch method.
   * @param {object} requestConfig
   * @param {function} successCallback
   * @param {function} errorCallback
   */
  patch(requestConfig, successCallback, errorCallback) {
    const config = requestConfig;
    config.method = 'patch';
    this.generateRequest(config, successCallback, errorCallback);
  }
  /**
   * post method.
   * @param {object} requestConfig
   * @param {function} successCallback
   * @param {function} errorCallback
   */
  post(requestConfig, successCallback, errorCallback) {
    const config = requestConfig;
    config.method = 'post';
    this.generateRequest(requestConfig, successCallback, errorCallback);
  }

  /**
   * put method.
   * @param {object} requestConfig
   * @param {function} successCallback
   * @param {function} errorCallback
   */
  put(requestConfig, successCallback, errorCallback) {
    const config = requestConfig;
    config.method = 'put';
    this.generateRequest(requestConfig, successCallback, errorCallback);
  }
}

export { RootService as default };

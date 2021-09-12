import RootService from './root-service';
import globals from '../utils/globals';


class patientService extends RootService {
  
  getPatientDetails(requestConfig, successCallback, errorCallback) {
    const config = requestConfig;
    config.url = globals.getRestUrl('patient');
    this.get(config, successCallback, errorCallback);
  }

  getMedicationDetails(requestConfig, successCallback, errorCallback) {
    const config = requestConfig;
    config.url = globals.getRestUrl('medication');
    this.get(config, successCallback, errorCallback);
  }

  getSupplimentDetails(requestConfig, successCallback, errorCallback) {
    const config = requestConfig;
    config.url = globals.getRestUrl('supplement');
    this.get(config, successCallback, errorCallback);
  }

  getGoalsDetails(requestConfig, successCallback, errorCallback) {
    const config = requestConfig;
    config.url = globals.getRestUrl('goals');
    this.get(config, successCallback, errorCallback);
  }
}
export {
    patientService as default,
};

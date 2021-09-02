import RootService from './root-service';
import globals from '../utils/globals';


class patientService extends RootService {
  
  getPatientDetails(requestConfig, successCallback, errorCallback) {
    const config = requestConfig;
    config.url = globals.getRestUrl('patient');
    this.get(config, successCallback, errorCallback);
  }
}
export {
    patientService as default,
};

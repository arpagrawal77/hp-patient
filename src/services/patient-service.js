import RootService from './root-service';
import globals from '../globals';


class patientService extends RootService {
  
  addItemsToCart(requestConfig, successCallback, errorCallback) {
    const config = requestConfig;
    config.url = globals.getRestUrl('flights');
    this.post(config, successCallback, errorCallback);
  }
}
export {
    patientService as default,
};

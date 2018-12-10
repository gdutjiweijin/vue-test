import {OK, apiUrl} from '../config/api'
import axios from 'axios';

export const getUserName = function () {
  return axios.get(apiUrl.getUserNameUrl, {}).then(response => {
    // get response data
    response = response.data;
    if (response.retCode === OK) {
      return Promise.resolve(response)
    }
  })
}

import axios from 'axios';

const baseUrl = 'http://apidata.com';

export default {
  request: (endpoint, config) => axios(`${baseUrl}${endpoint}`, config)
};

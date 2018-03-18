import axios from '../Axios';

class Authentication {
  async getAccessToken(email: string, password: string, strategy: string = 'local') {

    return axios.post('/authentication', {
      email,
      password,
      strategy
    });
  }
}

export default new Authentication();

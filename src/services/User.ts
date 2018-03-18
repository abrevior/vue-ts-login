import axios from '../Axios';
import UserData from '../interfaces/UserData';
import UserDataCreate from '../interfaces/UserDataCreate';

class User {
  async getUserById(id: string) {
    return axios.get(`/users/${id}`);
  }

  async findUser(query: object) {
    return axios.get('/users', {
      params: query
    });
  }

  async create(data: UserDataCreate) {
    return axios.post('/users', data);
  }

  async removeById(id: string) {
    return axios.delete(`/users/${id}`);
  }

  async updateById(id: string, data: UserData) {
    return axios.put(`/users/${id}`, data);
  }

  async patchById(id: string, data: UserData) {
    return axios.patch(`/users/${id}`, data);
  }
}

export default new User();

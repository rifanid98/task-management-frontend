import { post } from 'axios';
import BaseHttpService from './base-http.service';

export default class AuthService extends BaseHttpService {
  async signin(username, password) {
    const result = await post(`${this.BASE_URL}/auth/signin`, { username, password });
    const token = result.data.token;
    this.saveToken(token);
    return result.data.username;
  }

  async signup(username, password) {
    await post(`${this.BASE_URL}/auth/signup`, { username, password });
  }

  async signout() {
    this.removeToken();
  }
}

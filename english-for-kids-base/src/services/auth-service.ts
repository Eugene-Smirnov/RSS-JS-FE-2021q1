import { AuthResponse } from '../models/auth-responce';
import { LOGIN_URL } from './server-specs';

export const LOCALSTORAGE_TOKEN_NAME = 'EFK-login-token';

export const authService = {
  async login(login: string, password: string): Promise<AuthResponse | null> {
    let response = null;
    try {
      response = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });
    } catch {
      response = null;
      return response;
    }
    const res: AuthResponse = await response.json();
    window.localStorage.setItem(LOCALSTORAGE_TOKEN_NAME, res.token);
    return res;
  },
};

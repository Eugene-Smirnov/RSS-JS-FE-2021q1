export type AuthResponse = {
  user: {
    login: string;
    id: string;
  };
  token: string;
};

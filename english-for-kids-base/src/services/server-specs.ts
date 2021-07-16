// export const SERVER_URL = 'https://eugene-smirnov-efk-server.herokuapp.com/api';
export const SERVER_URL = 'http://localhost:3001/api';

export const CATEGORIES_URL = `${SERVER_URL}/category`;

export const createCardUrl = (categoryId: string): string => `${CATEGORIES_URL}/${categoryId}/card`;

export const AUTH_URL = `${SERVER_URL}/auth`;
export const LOGIN_URL = `${AUTH_URL}/login`;

import { redirect } from 'react-router-dom';

export const getTokenDuration = () => {
  const storedExpirationDateString = localStorage.getItem('expiration');

  const expirationDate = new Date(storedExpirationDateString);
  const now = new Date();

  const duration = expirationDate.getTime() - now.getTime();
  return duration;
};

export const getAuthToken = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) {
    return 'EXPIRED';
  }

  return token;
};

export const tokenLoader = () => {
  return getAuthToken();
};

export const checkAuthLoader = () => {
  const token = getAuthToken();

  if (!token || token === 'EXPIRED') {
    return redirect('/auth');
  }
  return null;
};

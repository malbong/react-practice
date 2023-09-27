import { useState, useCallback } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, options) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      setError(error.message || 'Something went wrong!');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, error, request];
};

export default useHttp;

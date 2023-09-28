import { useState, useCallback } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, options = null) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Http request Error');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('error message: ', error.message);
      setError(error.message || 'Something Wrong In Http Request');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    request,
  };
};

export default useHttp;

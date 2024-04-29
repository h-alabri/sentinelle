import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);  // Initialize as false
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const text = await response.text(); // Read response as text first
        const jsonData = text ? JSON.parse(text) : {}; // Safely parse JSON only if text is not empty
        throw new Error(jsonData.error || 'Failed to login');
      }

      const json = await response.json(); // If response is OK, parse it as JSON

      // Save the user to local storage
      localStorage.setItem('user', JSON.stringify(json));

      // Update the auth context
      dispatch({type: 'LOGIN', payload: json});
    } catch (error) {
      setError(error.message || 'An unexpected error occurred');
    } finally {
      // Always turn off loading indicator
      setIsLoading(false);
    }
  };


  return { login, isLoading, error };
}
